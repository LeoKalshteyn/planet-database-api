class StarSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :magnitude, :mass, :image
  has_many :planets
end
