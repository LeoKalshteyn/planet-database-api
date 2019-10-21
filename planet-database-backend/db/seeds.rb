# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

StarSystem.destroy_all
Planet.destroy_all

s1 = StarSystem.create(name: "Proxima Centauri", distance: "4.2441", apparent_magnitude: "11.13", mass: "0.123"
s2 = StarSystem.create(name: "Barnard's Star", distance: "5.958", apparent_magnitude: "9.511", mass: "0.144"
s3 = StarSystem.create(name: "Wolf 359", distance: "7.895", apparent_magnitude: "13.54", mass: "0.09"

p1= Planet.create(label: "Proxima b", information: "test", planet_id: 1 )
p2= Planet.create(label: "GJ 699 b", information: "test", planet_id: 2 )
p3= Planet.create(label: "Epsilon Eridani b", information: "test", planet_id: 3 )
