class RatingsController < ApplicationController
  # before_action :authorize_request, only: %i[show update]

  def index
    @ratings = Rating.all
    render json: @ratings
  end

  def show
    render json: @rating
  end

  def update
    @rating = Rating.find(params[:id])

    if @rating.update(rating_params)
      render json: @rating
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  private

  def rating_params
    params.permit(:rating)
  end

end