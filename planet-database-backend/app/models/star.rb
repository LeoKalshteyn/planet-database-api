class Star < ApplicationRecord
  # destroy causes all the associated objects to also be destroyed (callback)
  has_many :planets, :dependent => :destroy
end
