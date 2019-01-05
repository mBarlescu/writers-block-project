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
    puts("AAAAAAAAAAAAAAAAAAAAAAAa   #{stories_like_params}")
    puts("Params    #{params}")
    @stories_like = StoriesLike.new(stories_like_params)
    @stories_like.user_id = current_user.id

    if @stories_like.save
      render json: @stories_like, status: :created
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
    @stories_like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stories_like
      @stories_like = StoriesLike.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def stories_like_params
      params.require(:stories_like).permit(:user_id, :story_id)
    end
end
