# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Star.destroy_all
Planet.destroy_all

b1 = Star.create(name: "Name: Proxima Centauri", distance: "Distance in LY: 4.2441", magnitude: "Apparent Magnitude: 11.13", mass: "Mass: 0.123", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg/1200px-New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg")
b2 = Star.create(name: "Name: Barnard's Star", distance: "Distance in LY: 5.958", magnitude: "Apparent Magnitude: 9.511", mass: "Mass: 0.144", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Barnardstar2006.jpg")
b3 = Star.create(name: "Name: Epsilon Eridani", distance: "Distance in LY: 10.446", magnitude: "Apparent Magnitude: 3.73", mass: "Mass: 0.83", image: "https://www.eso.org/public/outreach/eduoff/cas/cas2002/cas-projects/sweden_eridani_1/image002.jpg")
b4 = Star.create(name: "Name: Ross 128", distance: "Distance in LY: 11.007", magnitude: "Apparent Magnitude: 11.1", mass: "Mass: 0.168", image: "https://www.daviddarling.info/images/Ross_128.jpg")

r1= Planet.create(label: "Proxima b", planet_mass: "0.9", radius: "1.1", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 1 )
r2= Planet.create(label: "GJ 699 b", planet_mass: "0.9", radius: "1.1", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 2 )
r3= Planet.create(label: "Epsilon Eridani b", planet_mass: "0.9", radius: "1.1", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 3 )
r4= Planet.create(label: "Ross 128 b", planet_mass: "0.9", radius: "1.1", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 4 )
