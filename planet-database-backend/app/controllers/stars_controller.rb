class StarsController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @stars = Star.all
    render json: @stars, only: [:id, :name, :distance, :magnitude, :mass, :image], status: 200
  end

  def create
    @star = Star.create(star_params)
    render json: @star, status: 200
  end

  def show
    render json: @star, status: 200
  end

  def destroy
    @star.destroy
  end

  private

  def star_params
    params.require(:star).permit(:name, :distance, :magnitude, :mass, :image)
  end

  def set_params
    @star = Star.find(params[:id])
  end
end
