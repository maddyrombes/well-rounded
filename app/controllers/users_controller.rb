class UsersController < ApplicationController
    before_action :set_user, only: :show
    # before_action :authorize_request, except: :create

    # READ

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user, include: :ratings
    end

    # CREATE

    def create
        @user = User.new(user_params)
        @user.save
        @metrics = Metric.all
        @metrics.each do |metric|
            Rating.create metric:metric, user:@user, rating:5
        end
        render json: @user, status: :created, location: @user
    rescue StandardError => e
        render json: { message: e.to_s }, status: :unprocessable_entity
    end

    # UPDATE

    # def update
    #     if current_user.update_attributes(edit_ratings_params)
    #       render json: @user
    #     else
    #       render json: @user.errors, status: :unprocessable_entity
    #     end
    # end

    # DESTROY

    def destroy
        @user = User.find(params[:id])
        if @user.present?
            @user.destroy
        end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

    def edit_ratings_params
        params.permit(:user)
    end
end