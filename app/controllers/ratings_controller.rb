class RatingsController < ApplicationController
    before_action :authenticate_user, only: %i[show update]

    def index
        @ratings = Rating.all
        render json: @ratings
    end

    def show
        render json: @rating
    end

    def update
        if @ratings.update(rating_params)
          render json: @ratings
        else
          render json: @ratings.errors, status: :unprocessable_entity
        end
    end
end