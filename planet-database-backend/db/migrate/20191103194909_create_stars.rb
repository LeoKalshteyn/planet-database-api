class CreateStars < ActiveRecord::Migration[5.2]
  def change
    create_table :stars do |t|
      t.string :name
      t.string :distance
      t.string :magnitude
      t.string :mass
      t.string :image

      t.timestamps
    end
  end
end
