class Api::SessionsController < ApplicationController


  def index
    if current_user
      render  status: :ok
    else
      render json: {
        error: "No session found.",
        status: 400
      },  status: :not_found
    end
  end

  def create
    if @user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = @user.id
      render status: :created
    else
      render json: {
        error: "Email or password incorrect.",
        status: 400
      },  status: :not_found
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {
      message: "Session deleted.",
      status: 200
    }, status: :ok
  end
  
end
