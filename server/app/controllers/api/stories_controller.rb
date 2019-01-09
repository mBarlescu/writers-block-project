require 'securerandom'

class Api::StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  # GET api/stories
  def index
    @most_popular = Story.find_most_popular_stories
    @newest_stories = Story.find_newest_stories
  end

  # GET api/stories/1
  def show
    if @story
      @genres = @story.genres.all
      @author = User.find(@story.user_id)
      @number_of_likes = @story.stories_like.size
      @comments = @story.comments.all.order('created_at DESC')
      @author_stories = Story.find_stories_by_author(@story.user_id, @story.id)
      @user_liked_story = false
      if current_user && StoriesLike.where(user_id: current_user.id, story_id: @story.id) != []
        @user_liked_story = true
      end
    else
      render json: @story.errors, status: :not_found
    end
  end

  # POST api/stories
  def create
    @story = Story.new(story_params)
    @story.user_id = current_user.id
    @story.published = false
    @story.text = ""
    if @story.save
      @genre_story = GenreStory.new(genre_id: params[:genre], story_id: @story.id)
      @genre_story.save
      render json: @story, status: :created
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT api/stories/1
  def update
    puts("PARAMS, #{params}")
    if((current_user.id == @story.user_id) && @story.published == false)
      if @story.update(story_params)
        @genre_story = GenreStory.where(story_id: @story.id)
        @genre_story.update(genre_id: params[:genre])
        render json: @story
      else
        render json: @story.errors, status: :unprocessable_entity
      end
    else
      render json: @story.errors, status: :not_found
    end
  end

  # POST api/stories/1/like
  def like
    @user = User.third # Need to change this after
    @story_like = StoriesLike.new(
      user_id: current_user.id,
      story_id: params[:story_id]
    )
    if @story_like.save
      render json: @story_like
    else
      render json: @story_like.errors, status: :unprocessable_entity
    end
  end

  # GET api/stories/1/new
  def new
    @story = Story.find(params[:story_id])
  end


  # POST api/stories/1/publish
  def publish
    puts ("Params KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK #{params[:story_id]}")
    @story = Story.find(params[:story_id])
    if((current_user.id == @story.user_id) && @story.published == false)
      if @story.update(text: params[:text], published: true)
        segments = @story.text.split("\n")
        index = 0
        segments.each_with_index do |item|
          if item != ""
            @story.segments.create!(
              text: item,
              position: index
            )
            index = index+1
          end
        end
      end
      if @story.save
          render json: @story, status: :created
      else
        render json: @story.errors, status: :unprocessable_entity
      end
    else
      render json: @story.errors, status: :not_found
    end
  end

  # GET api/stories/1/segments
  def segments
    @story = Story.find(params[:story_id])
    @user_liked_story = false
    if current_user && StoriesLike.where(user_id: current_user.id, story_id: @story.id) != []
      @user_liked_story = true
    end
    @segments = @story.segments.order('position')
    @author = User.find(@story.user_id)
    @number_of_likes = @story.stories_like.size
    @feedbacks = []
    @segments.each do |item|
      @feedbacks.push(item.feedbacks.order('created_at DESC'))
    end
  end

  # GET api/drafts
  def drafts
    @drafts = Story.find_unpublished_stories_by_user(current_user.id)
    render json: @drafts, status: :ok
  end

  # POST api/stories/upload
  def upload
    if params[:filepond].present?
      file = params[:filepond]
      random_string = SecureRandom.hex
      filename = Rails.root.join('public', 'images', 'stories', random_string)
      dirname = File.dirname(filename)
      unless File.directory?(dirname)
        FileUtils.mkdir_p(dirname)
      end
      File.open(filename, 'wb') do |f|
        f.write(file.read)
      end
      render json: "/images/stories/#{random_string}", status: :ok
    else
      render json: {}, status: :not_found
    end
  end


  # DELETE api/stories/1
  def destroy
    if @story.destroy
      @drafts = Story.find_unpublished_stories_by_user(current_user.id)
      render json: @drafts, status: :ok
    else
      render json: @story.errors, status: :not_found
    end
  end




  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      if Story.exists?(params[:id])
        @story = Story.find(params[:id])
      else
        nil
      end
    end

    # Only allow a trusted parameter "white list" through.
    def story_params
      params.require(:story).permit(:title, :description, :text, :image, :published)
    end
end
