# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Star.destroy_all
Planet.destroy_all

s1 = Star.create(name: "Proxima Centauri", distance: "4.2441", magnitude: "11.13", mass: "0.123", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg/1200px-New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg")
s2 = Star.create(name: "Barnard's Star", distance: "5.958", magnitude: "9.511", mass: "0.144", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Barnardstar2006.jpg")
s3 = Star.create(name: "Epsilon Eridani", distance: "10.446", magnitude: "3.73", mass: "0.83", image: "https://www.eso.org/public/outreach/eduoff/cas/cas2002/cas-projects/sweden_eridani_1/image002.jpg")
s4 = Star.create(name: "Ross 128", distance: "11.007", magnitude: "11.1", mass: "0.168", image: "https://www.daviddarling.info/images/Ross_128.jpg")
s5 = Star.create(name: "Gliese 725", distance: "11.490", magnitude: "9.7", mass: "0.248", image: "http://www.richweb.f9.co.uk/astro/images/Gliese_725.20070921.im215066-72.med7x30s.C.50pc.an.jpg")
s6 = Star.create(name: "Groombridge 34", distance: "11.618", magnitude: "8.1", mass: "0.38", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w56QM3UqnZQ0Lz5vaDytQQHaE8%26pid%3DApi&f=1")

p1= Planet.create(label: "Proxima b", planet_mass: "0.9", radius: "1.1", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 1 )
p2= Planet.create(label: "GJ 699 b", planet_mass: "0.9", radius: "Unknown", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 2 )
p3= Planet.create(label: "Epsilon Eridani b", planet_mass: "0.9", radius: "Unknown", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 3 )
p4= Planet.create(label: "Ross 128 b", planet_mass: "0.9", radius: "Unknown", semimajor_axis: "0.047", orbital_period: "11.2", eccentricity: "0.02", discovery_year: "2016", star_id: 4 )
p5= Planet.create(label: "Bb", planet_mass: "15.7", radius: "Unknown", semimajor_axis: "0.261", orbital_period: "91.3", eccentricity: "0.06", discovery_year: "2019", star_id: 5 )
p6= Planet.create(label: "Bc", planet_mass: "13.1", radius: "Unknown", semimajor_axis: "0.428", orbital_period: "192", eccentricity: "0.03", discovery_year: "2019", star_id: 5 )
p6= Planet.create(label: "Gliese 15 Ab", planet_mass: "3.6", radius: "Unknown", semimajor_axis: "0.0710", orbital_period: "11.4", eccentricity: "0.071", discovery_year: "2014", star_id: 6 )
