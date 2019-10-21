class StarSystemSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :apparent_magnitude, :mass
  has_many :planets
end
