class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.writers_with_published_stories
  end

  # GET /users/1
  def show
    if @user
      @author_followers = Relationship.count_followers(@user.id)
      @stories = Story.find_published_stories_by_user(@user.id)
      render status: :created
    else
      render status: :not_found
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = user.id
      #redirect_to '/'
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :description, :email, :password, :image)
    end
end
