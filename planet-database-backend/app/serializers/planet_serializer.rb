class PlanetSerializer < ActiveModel::Serializer
  attributes :id, :label, :planet_mass, :radius, :semimajor_axis, :orbital_period, :eccentricity, :discovery_year
  belongs_to :star
end
