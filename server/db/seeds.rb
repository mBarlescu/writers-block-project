# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts "Creating seed file..."

puts "Making Users..."

User.destroy_all

joe = User.create!(
  first_name: "Joe",
  last_name: "Dolan",
  description: "Lorem ipsum dolor amet beard master cleanse cray fingerstache, art party green juice unicorn trust fund you probably haven't heard of them vape swag brooklyn meditation gochujang.",
  email: "joe@gmail.com",
  password: "aaa",
  image: "https://daphoto.com/wp-content/uploads/2013/11/Friel_4065-5x7x300(pp_w642_h900).jpg"
)

ben = User.create!(
  first_name: "Ben",
  last_name: "Jenoli",
  description: "Excepteur next level hell of occupy, salvia organic helvetica kogi elit shoreditch paleo glossier tattooed aesthetic.",
  email: "ben@gmail.com",
  password: "aaa",
  image: "https://srkheadshotday.com/wp-content/uploads/Mark_Otis_Headshot_16D7253_Crop32.jpg"
  
)

kim = User.create!(
  first_name: "Kim",
  last_name: "Kennedy",
  description: "Artisan vape 90's, deserunt woke ipsum ullamco snackwave jianbing excepteur aliqua eiusmod.",
  email: "kim@gmail.com",
  password: "aaa",
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

jim = User.create!(
  first_name: "Jim",
  last_name: "Jennedy",
  description: "Exercitation austin tbh knausgaard tilde lo-fi. Chicharrones single-origin coffee echo park tumblr swag flannel deserunt chillwave kale chips typewriter man braid letterpress.",
  email: "jim@gmail.com",
  password: "aaa",
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

kon = User.create!(
  first_name: "Kon",
  last_name: "Krondy",
  description: "Skateboard celiac lo-fi sint YOLO direct trade. Activated charcoal hoodie wolf raw denim vape man braid aute laborum vexillologist keffiyeh seitan lumbersexual umami yr cronut.",
  email: "kon@gmail.com",
  password: "aaa",
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

puts "DONE!"

puts "Making Genres..."

genre1 = Genre.find_or_create_by! name: 'Fantasy'
genre2 = Genre.find_or_create_by! name: 'Romance'
genre3 = Genre.find_or_create_by! name: 'Sci-Fi'

puts "DONE!"

puts "Making Stories..."

Story.destroy_all

Story.create!(
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

puts "DONE!"

puts "Making Stories_likes..."

@user1 = User.first
@user2 = User.second
@story1 = Story.first
@story2 = Story.second

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story1.id
)

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story2.id
)

StoriesLike.create!(
  user_id: @user2.id,
  story_id: @story2.id
)

puts "DONE!"

puts "Making Followers..."

joe.following_relationships.create!(
  follower_id: kon.id
)

joe.following_relationships.create!(
  follower_id: ben.id
)

kim.following_relationships.create!(
  follower_id: ben.id
)

kim.following_relationships.create!(
  follower_id: joe.id
)

ben.following_relationships.create!(
  follower_id: kim.id
)

ben.following_relationships.create!(
  follower_id: joe.id
)

# For testing duplication of followers
# ben.following_relationships.create!(
#   follower_id: joe.id
# )

kon.following_relationships.create!(
  follower_id: ben.id
)

kon.following_relationships.create!(
  follower_id: joe.id
)

kon.following_relationships.create!(
  follower_id: kim.id
)

puts "DONE!"
