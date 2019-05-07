class UsersController < ApplicationController
    before_action :set_user, only: :show

    def user_params
        params.require(:user).permit(:username, :password)
    end

    def create
        @user = User.new(user_params)
        @user.save
        @metrics = Metric.all
        @metrics.each do |metri|
            Rating.create metric:metri, user:@user, rating:5
        end
        render json: @user, status: :created, location: @user, include: :ratings
    rescue StandardError => e
        render json: { message: e.to_s }, status: :unprocessable_entity
    end

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user, include: :ratings
    end

    def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end
end