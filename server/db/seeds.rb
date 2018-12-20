# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts "Creating seed file..."

puts "Making Users..."


joe = User.find_or_create_by!(
  first_name: "Joe",
  last_name: "Dolan",
  description: "",
  email: "joe@gmail.com",
  password: "aaa",
  image: "https://daphoto.com/wp-content/uploads/2013/11/Friel_4065-5x7x300(pp_w642_h900).jpg"
)

ben = User.find_or_create_by!(
  first_name: "Ben",
  last_name: "Jenoli",
  description: "",
  email: "ben@gmail.com",
  password: "aaa",
  image: "https://srkheadshotday.com/wp-content/uploads/Mark_Otis_Headshot_16D7253_Crop32.jpg"
  
)

kim = User.find_or_create_by!(
  first_name: "Kim",
  last_name: "Kennedy",
  description: "",
  email: "kim@gmail.com",
  password: "aaa",
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

puts "Making Genres..."

genre1 = Genre.find_or_create_by! name: 'Fantasy'
genre2 = Genre.find_or_create_by! name: 'Romance'
genre3 = Genre.find_or_create_by! name: 'Sci-Fi'

puts "Making Stories..."

Story.find_or_create_by!(
  user_id: joe.id,
  title: "The Many Hardships of Hard Ships",
  description: "A touching story that gives you a relatable window into the mind of a master Shipsmith.",
  text: "Here is where the story doc is kept",
  image: "https://images.alphacoders.com/450/450769.jpg",
  published: true
)

Story.create!(
  user_id: ben.id,
  title: "Willy and the Fenk",
  description: "A touching story that gives you a relatable window into the mind of a master Fenk and his companions.",
  text: "Here is where the story doc is kept",
  image: "http://orig06.deviantart.net/1d07/f/2015/103/8/d/the_rake_by_tsabo6-d8pk6q9.jpg",
  published: true
)

Story.create!(
  user_id: kim.id,
  title: "The Darkness Within",
  description: "A touching story that gives you a relatable window into the mind of the author and their ability to become very dark very quickly.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: true
)

puts "Making Stories_likes..."

@user1 = User.first
@user2 = User.second
@story1 = Story.first
@story2 = Story.second

StoriesLike.create!(
  user_id: @user1,
  story_id: @story1
)

StoriesLike.create!(
  user_id: @user1,
  story_id: @story2
)

StoriesLike.create!(
  user_id: @user2,
  story_id: @story2
)

