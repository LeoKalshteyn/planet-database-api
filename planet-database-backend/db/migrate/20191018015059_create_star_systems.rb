class CreateStarSystems < ActiveRecord::Migration[5.2]
  def change
    create_table :star_systems do |t|
      t.float :distance
      t.float :apparent_magnitude
      t.float :mass

      t.timestamps
    end
  end
end
