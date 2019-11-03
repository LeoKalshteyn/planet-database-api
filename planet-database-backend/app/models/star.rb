class Star < ApplicationRecord
  has_many :planets, :dependent => :destroy
end
