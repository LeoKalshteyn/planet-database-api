# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

StarSystem.destroy_all
Planet.destroy_all

s1 = StarSystem.create(name: "Proxima Centauri", distance: "4.2441", apparent_magnitude: "11.13", mass: "0.123", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg/1200px-New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg"
s2 = StarSystem.create(name: "Barnard's Star", distance: "5.958", apparent_magnitude: "9.511", mass: "0.144". image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Barnardstar2006.jpg"
s3 = StarSystem.create(name: "Epsilon Eridani", distance: "10.446", apparent_magnitude: "3.73", mass: "0.83", image: "https://www.eso.org/public/outreach/eduoff/cas/cas2002/cas-projects/sweden_eridani_1/image002.jpg"
s4 = StarSystem.create(name: "Ross 128", distance: "11.007", apparent_magnitude: "11.1", mass: "0.168", image: "https://www.daviddarling.info/images/Ross_128.jpg"

p1= Planet.create(label: "Proxima b", information: "test", planet_id: 1 )
p2= Planet.create(label: "GJ 699 b", information: "test", planet_id: 2 )
p3= Planet.create(label: "Epsilon Eridani b", information: "test", planet_id: 3 )
p4= Planet.create(label: "Ross 128 b", information: "test", planet_id: 4 )
