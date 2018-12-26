class Api::SessionsController < ApplicationController

  def create
    email = "kon@gmail.com"
    password = "123456"
    #if user = User.authenticate_with_credentials(params[:email], params[:password])
    if @user = User.authenticate_with_credentials(email, password)
      session[:user_id] = @user.id
      render status: :created
    else
      render status: :not_found
    end
  end

  def destroy
    session[:user_id] = nil
    render status: :ok
  end
  
end
