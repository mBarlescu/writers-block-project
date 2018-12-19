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
  name: "Joe"
)
user2 = User.find_or_create_by!(
  name: "Mike"
)
user3 = User.find_or_create_by!(
  name: "Al"
)
user4 = User.find_or_create_by!(
  name: "Kim"
)