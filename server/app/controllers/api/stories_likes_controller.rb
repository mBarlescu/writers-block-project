class Api::StoriesLikesController < ApplicationController
  before_action :set_stories_like, only: [:show, :update, :destroy]

  # GET /stories_likes
  def index
    @stories_likes = StoriesLike.all

    render json: @stories_likes
  end

  # GET /stories_likes/1
  def show
    render json: @stories_like
  end

  # POST /stories_likes
  def create
    @stories_like = StoriesLike.new(stories_like_params)
    @stories_like.user_id = current_user.id
    if @stories_like.save
      @story = Story.find(@stories_like.story_id)
      @number_of_likes = @story.stories_like.size
      render json: @number_of_likes, status: :created
    else
      render json: @stories_like.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stories_likes/1
  def update
    if @stories_like.update(stories_like_params)
      render json: @stories_like
    else
      render json: @stories_like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stories_likes/1
  def destroy
    @story = Story.find(params[:id])
    if @stories_like.destroy
      @number_of_likes = @story.stories_like.size
      render json: @number_of_likes, status: :ok
    else
      render json: @stories_like.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stories_like
      @stories_like = StoriesLike.where(story_id: params[:id], user_id: current_user.id).first
    end

    # Only allow a trusted parameter "white list" through.
    def stories_like_params
      params.require(:stories_like).permit(:user_id, :story_id)
    end
end
