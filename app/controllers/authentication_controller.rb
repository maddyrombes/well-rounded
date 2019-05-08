class AuthenticationController < ApplicationController

    def login
      @user = User.find_by_username(params[:username])
      if @user.authenticate(params[:password]) 
        token = JsonWebToken.encode(id: @user.id, ratings: @user.ratings, username: @user.username)
        render json: { token: token }, status: :ok
      else
        render json: { error: 'unauthorized' }, status: :unauthorized
      end
    end
  
    private
  
    def login_params
      params.permit(:username, :password)
    end
end