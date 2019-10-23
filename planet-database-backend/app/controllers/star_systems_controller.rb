class StarSystemsController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @star_systems = StarSystem.all
    render json: @star_systems, only: [:id, :name, :distance, :apparent_magnitude, :mass, :image], status: 200
  end

  def create
    @star_system = StarSystem.create(star_system_params)
    render json: @star_system, status: 200
  end

  def show
    render json: @star_system, status: 200
  end

  def update
    @star_system.update(star_system_params)
    if @star_system.save
      render json: @star_system, status: 200
    else
      render json: { errors: @star_system.errors.full_messages }, status: 422
    end
  end

  def destroy
    @star_system.destroy
  end

  private

  def star_system_params
    params.require(:star_system).permit(:distance, :apparent_magnitude, :mass, :image)
  end

  def set_params
    @star_system = StarSystem.find(params[:id])
  end
end
