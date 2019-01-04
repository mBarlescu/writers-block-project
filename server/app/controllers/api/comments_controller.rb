class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET api/comments
  def index
    @comments = Comment.all
    render json: @comments
  end

  # GET api/comments/1
  def show
    render json: @comment
  end

  # POST api/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      @story = Story.find(@comment.story_id)
      @comments = @story.comments

      render status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT api/comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE api/comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:user_id, :story_id, :text)
    end
end
