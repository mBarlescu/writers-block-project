class GenreStoriesController < ApplicationController
  before_action :set_genre_story, only: [:show, :update, :destroy]

  # GET /genre_stories
  def index
    @genre_stories = GenreStory.all

    render json: @genre_stories
  end

  # GET /genre_stories/1
  def show
    render json: @genre_story
  end

  # POST /genre_stories
  def create
    @genre_story = GenreStory.new(genre_story_params)

    if @genre_story.save
      render json: @genre_story, status: :created, location: @genre_story
    else
      render json: @genre_story.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /genre_stories/1
  def update
    if @genre_story.update(genre_story_params)
      render json: @genre_story
    else
      render json: @genre_story.errors, status: :unprocessable_entity
    end
  end

  # DELETE /genre_stories/1
  def destroy
    @genre_story.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_genre_story
      @genre_story = GenreStory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def genre_story_params
      params.require(:genre_story).permit(:story_id, :genre_id)
    end
end
