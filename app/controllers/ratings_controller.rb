class RatingsController < ApplicationController
    before_action :authenticate_user

    def index
        @ratings = Rating.all
        render json: @ratings
    end

    def show
        render json: @rating
    end
end