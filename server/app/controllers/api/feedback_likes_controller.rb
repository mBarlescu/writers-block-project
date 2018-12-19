class Api::FeedbackLikesController < ApplicationController
  before_action :set_feedback_like, only: [:show, :update, :destroy]

  # GET /feedback_likes
  def index
    @feedback_likes = FeedbackLike.all

    render json: @feedback_likes
  end

  # GET /feedback_likes/1
  def show
    render json: @feedback_like
  end

  # POST /feedback_likes
  def create
    @feedback_like = FeedbackLike.new(feedback_like_params)

    if @feedback_like.save
      render json: @feedback_like, status: :created, location: @feedback_like
    else
      render json: @feedback_like.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /feedback_likes/1
  def update
    if @feedback_like.update(feedback_like_params)
      render json: @feedback_like
    else
      render json: @feedback_like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /feedback_likes/1
  def destroy
    @feedback_like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback_like
      @feedback_like = FeedbackLike.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def feedback_like_params
      params.require(:feedback_like).permit(:feedback_id, :user_id)
    end
end
