class StarSystemSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :apparent_magnitude, :mass, :image
  has_many :planets
end
