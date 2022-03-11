# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = City.create([
    {
        name: "New York City",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
    },

    {
        name: "Boston",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston_-_panoramio_%2823%29.jpg/288px-Boston_-_panoramio_%2823%29.jpg"
    },

    {
        name: "Philadelphia",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Philadelphia_skyline_from_South_Street_Bridge_January_2020_%28rotate_2_degrees_perspective_correction_crop_4-1%29.jpg/1920px-Philadelphia_skyline_from_South_Street_Bridge_January_2020_%28rotate_2_degrees_perspective_correction_crop_4-1%29.jpg"
    },

    {
        name: "Atlanta",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Atlanta_Montage_2018.png/305px-Atlanta_Montage_2018.png"
    },

    {
        name: "Miami",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Miami_collage_20110330.jpg/300px-Miami_collage_20110330.jpg"
    },

    {
        name: "Austin",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg/1280px-Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg"
    }
])

reviews = Review.create([
    {
        title: 'Great city',
        description: 'I love this city.',
        score: 5,
        city: cities.first
    },

    {
        title: 'Great place',
        description: 'I love this place.',
        score: 4,
        city: cities.first
    }
])
