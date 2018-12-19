# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts "Creating seed file..."


puts "Making Genres..."

genre1 = Genre.find_or_create_by! name: 'Fantasy'
genre2 = Genre.find_or_create_by! name: 'Romance'
genre3 = Genre.find_or_create_by! name: 'Sci-Fi'

puts "Making Stories..."

story1 = genre1.stories.find_or_create_by! name: "Wow I'm A Real Book!"
story2 = genre2.stories.find_or_create_by! name: "My Relationship With The Vacuum of Space"
story3 = genre3.stories.find_or_create_by! name: "Robots Will Totally Kill Us All Guys"



puts "Making Users..."


user1 = User.find_or_create_by!(
  first_name: "Joe",
  last_name: "Dolan",
  description: "",
  email: "joe@gmail.com",
  password: "aaa",
  image: "https://daphoto.com/wp-content/uploads/2013/11/Friel_4065-5x7x300(pp_w642_h900).jpg"
)

user2 = User.find_or_create_by!(
  first_name: "Ben",
  last_name: "Jenoli",
  description: "",
  email: "ben@gmail.com",
  password: "aaa",
  image: "https://srkheadshotday.com/wp-content/uploads/Mark_Otis_Headshot_16D7253_Crop32.jpg"
  
)

user3 = User.find_or_create_by!(
  first_name: "Kim",
  last_name: "Kennedy",
  description: "",
  email: "kim@gmail.com",
  password: "aaa",
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)