class UsersController < ApplicationController
    # before_action :authorize_request, except: :create

    def user_params
        params.require(:user).permit(:username, :password)
    end

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user, include: :ratings
    end
end