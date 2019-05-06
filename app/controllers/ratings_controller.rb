class RatingsController < ApplicationController
    def index
        @ratings = Rating.all
        render json: @ratings
    end

    def show
        render json: @rating
    end
end