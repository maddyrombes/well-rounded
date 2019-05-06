class UsersController < ApplicationController
    # before_action :authorize_request, except: :create
    before_action :set_user, only: :show

    def user_params
        params.require(:user).permit(:username, :password)
    end

    def create
        @user = User.new(user)
        if @user.save
          render json: @user, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user, include: :ratings
    end

    private

    def set_user
        @user = User.find(params[:id])
    end
end