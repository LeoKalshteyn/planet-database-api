class PlanetSerializer < ActiveModel::Serializer
  attributes :id, :label, :information
  belongs_to :star_system
end
