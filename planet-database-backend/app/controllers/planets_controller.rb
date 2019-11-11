class PlanetsController < ApplicationController
  before_action :set_params, only: [:show, :update, :destroy]

  def index
    @planets = Planet.all
    render json: @planets, status: 200
  end

  def create
    @planet = Planet.create(planet_params)
    render json: @planet, status: 200
  end

  private

  def planet_params
    params.require(:planet).permit(:label, :planet_mass, :radius, :semimajor_axis, :orbital_period, :eccentricity, :discovery_year, :star_id)
  end

  def set_params
    @planet = Planet.find(params[:id])
  end
end
