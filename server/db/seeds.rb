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


adrian = User.create!(
  first_name: "Adrian",
  last_name: "Dolan",
  description: "I’m a Dundalk native, now living in New Zealand. I’ve spent the last 12 years abroad and began blogging as a means of recording my travels and making everyone back home jealous. ",
  email: "adrian@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://www.writing.ie/wp-content/uploads/2018/04/Photo-for-writing-blog-220x330.jpg"
)

mila = User.create!(
  first_name: "Mila",
  last_name: "Mariah",
  description: "I grew up on a Greek island with only my sister, a donkey, a dog, and my books for company. I was always reading, often with three or four books on the go at once. ",
  email: "mila@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://www.writing.ie/wp-content/uploads/2014/07/myauthorpic-mini-220x330.jpg"
)

rose = User.create!(
  first_name: "Rose",
  last_name: "Jenoli",
  description: "Deep and dark with an unexpected twist. That would be my stories. Perhaps a little like life in that respect. This is the first time I have started to publish my stories.",
  email: "rose@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://www.writing.ie/wp-content/uploads/2018/06/Rosie.jpg"
  
)

kim = User.create!(
  first_name: "Kim",
  last_name: "Kennedy",
  description: "My stories have just been put into print for the first time on the website which is slowly growing.Feedback would be appreciated.",
  email: "kim@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://www.writing.ie/wp-content/uploads/2018/11/dxReNB3g_400x400-220x330.jpg"
)

jim = User.create!(
  first_name: "Adam",
  last_name: "Donnelly",
  description: "Merchant of gourmet soaps by day and a writer of fiction by night. A recent graduate of UCD, I'm looking forward to exploring and interacting with the Irish writing scene.",
  email: "jim@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

kon = User.create!(
  first_name: "Kon",
  last_name: "Krondy",
  description: "Skateboard celiac lo-fi sint YOLO direct trade. Activated charcoal hoodie wolf raw denim vape man braid aute laborum vexillologist keffiyeh seitan lumbersexual umami yr cronut.",
  email: "kon@gmail.com",
  password: '123456' ,
  password_confirmation: '123456',
  image: "https://i0.wp.com/blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688.jpg"
)

puts "DONE!"

puts "Making Genres..."

tragedy = Genre.find_or_create_by! name: 'Tragedy'
sci_fi = Genre.find_or_create_by! name: 'Sci-Fi'
fantasy = Genre.find_or_create_by! name: 'Fantasy'
mythology = Genre.find_or_create_by! name: 'Mythology'
adventure = Genre.find_or_create_by! name: 'Adventure'
mystery = Genre.find_or_create_by! name: 'Mystery'
drama = Genre.find_or_create_by! name: 'Drama'
romance = Genre.find_or_create_by! name: 'Romance'

puts "DONE!"

puts "Making Stories..."

Story.destroy_all

fantasy.stories.create!(
  user_id: mila.id,
  title: "The Many Hardships of Hard Ships",
  description: "A touching story that gives you a relatable window into the mind of a master Shipsmith.",
  text: "Here is where the story doc is kept",
  image: "https://images.alphacoders.com/450/450769.jpg",
  published: false
)

story2 = Story.create!(
  user_id: mila.id,
  title: "Willy and the Fenk",
  description: "A touching story that gives you a relatable window into the mind of a master Fenk and his companions.",
  text: "Here is where the story doc is kept",
  image: "http://orig06.deviantart.net/1d07/f/2015/103/8/d/the_rake_by_tsabo6-d8pk6q9.jpg",
  published: false
)

GenreStory.create!(
  story_id: story2.id,
  genre_id: fantasy.id 
)

GenreStory.create!(
  story_id: story2.id,
  genre_id: romance.id 
)

Story.create!(
  user_id: mila.id,
  title: "The Darkness Within",
  description: "A touching story that gives you a relatable window into the mind of the author and their ability to become very dark very quickly.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "The flower",
  description: "A touching flower story that gives you a relatable window into the mind of the author and their ability to become very dark very quickly.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in iaculis libero. Nunc odio urna, lacinia in libero et, feugiat finibus risus. Nullam sed tellus eget nulla consequat posuere et at tortor. Nullam in neque odio. Morbi porta massa quis cursus dapibus. Etiam ullamcorper, metus eget molestie porttitor, risus velit volutpat lectus, eget fermentum dui elit finibus eros. Mauris vitae diam quis ligula iaculis commodo. Ut vel leo consectetur, vestibulum dui at, pharetra dolor. Donec at augue turpis. In maximus nibh leo, nec tincidunt diam pharetra sed. Morbi varius nibh id orci sollicitudin maximus. Fusce consectetur convallis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer consequat leo nec vestibulum auctor. Morbi vulputate molestie velit, a mollis nisl. Nulla at justo eleifend, dignissim est varius, condimentum arcu.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "In hac habitasse platea dictumst.",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "In.",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "In hac",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)

Story.create!(
  user_id: kim.id,
  title: "In hac habi",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)
Story.create!(
  user_id: kim.id,
  title: "In hac habitasse",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)
Story.create!(
  user_id: kim.id,
  title: "In hac habitasse pla",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: false
)
Story.create!(
  user_id: kim.id,
  title: "In hac habitasse platea",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: true
)
Story.create!(
  user_id: kim.id,
  title: "In hac habitasse platea di",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: true
)
Story.create!(
  user_id: kim.id,
  title: "In hac habitasse platea dictum",
  description: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  text: "Here is where the story doc is kept",
  image: "http://eskipaper.com/images/darkness-master-1.jpg",
  published: true
)

story2 = Story.create!(
  user_id: rose.id,
  title: "Story Test Kamylla",
  description: "A touching story that gives you a relatable window into the mind of a master Fenk and his companions.",
  text: "Here is where the story doc is kept",
  image: "http://orig06.deviantart.net/1d07/f/2015/103/8/d/the_rake_by_tsabo6-d8pk6q9.jpg",
  published: false
)

story2 = Story.create!(
  user_id: rose.id,
  title: "Story Test Kamylla 2",
  description: "A touching story that gives you a relatable window into the mind of a master Fenk and his companions.",
  text: "Here is where the story doc is kept",
  image: "http://orig06.deviantart.net/1d07/f/2015/103/8/d/the_rake_by_tsabo6-d8pk6q9.jpg",
  published: false
)


puts "DONE!"

puts "Making Stories_likes..."

@user1 = User.first
@user2 = User.second
@story1 = Story.first
@story2 = Story.second
@story3 = Story.third
@story4 = Story.find(4)
@story5 = Story.find(5)
@story6 = Story.find(6)
@story7 = Story.find(7)
@story8 = Story.find(8)
@story9 = Story.find(9)
@story10 = Story.find(10)
@story11 = Story.find(11)
@story12 = Story.find(12)

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story1.id
)

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story2.id
)

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story3.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story4.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story5.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story6.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story7.id
)

StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story8.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story9.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story10.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story11.id
)
StoriesLike.create!(
  user_id: @user1.id,
  story_id: @story12.id
)

StoriesLike.create!(
  user_id: @user2.id,
  story_id: @story2.id
)



puts "Making Segments..."

@story1.segments.create!(
  text: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Quisque vitae arcu ut orci semper interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et nulla arcu. Proin posuere, nibh et efficitur auctor, magna ipsum ultricies erat, malesuada tincidunt neque libero sed odio. Nulla in nulla lacinia ante tincidunt ultrices id quis ligula. Praesent ipsum velit, lacinia id suscipit cursus, malesuada sit amet ligula. Nulla neque diam, viverra sit amet leo et, eleifend cursus tortor. Donec odio ligula, facilisis quis vulputate ac, rutrum id purus. Etiam dictum libero auctor mauris porttitor, et commodo urna vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque laoreet, risus sit amet hendrerit aliquam, justo lorem blandit quam, id commodo velit lacus ut elit.",
  position: 0
)

@story1.segments.create!(
  text: "Lorem ipsum dolor sit amet, aperiam evertitur per at. Ad quo sint labore audire, malis iriure volutpat at eos, quem delicatissimi necessitatibus no his. Ut nec lobortis adipiscing, vel at graece debitis philosophia, eos eu ignota pertinacia definitiones. Antiopam consequat ius an, paulo malorum usu ad, impetus alienum consequat an quo. Malis eloquentiam reformidans vis ad, cu vis imperdiet efficiendi, no vix sale audiam.",
  position: 1
)

@story1.segments.create!(
  text: "Per cu quis diceret abhorreant, ut eam hinc deserunt. Ex nec meis maiestatis scripserit, est ea semper sadipscing. Probo magna et mei, mei labitur invidunt philosophia eu. Sea ei commodo albucius, et pro audiam vivendum, nec noster facete equidem id. Alii etiam aperiam eum ea.",
  position: 2
)

@story1.segments.create!(
  text: "No vis oratio offendit repudiare. Ut quo elitr iriure invenire, no feugait repudiare euripidis duo. Nec amet legendos cotidieque ei. Te legere propriae gloriatur eos, dolore vocibus vix in.",
  position: 3
)

@story1.segments.create!(
  text: "Natum illud dolorem ius id, nusquam mnesarchum usu ut. Ad nusquam reprehendunt quo, sit ea primis gubergren. Quis dicunt principes usu eu, habeo ancillae nec in. Hinc graece no sit, cum iusto omnes et",
  position: 4
)

puts "Feedbacks..."

@seg1 = Segment.first
@seg2 = Segment.second

Feedback.create!(
  segment_id: @seg1.id,
  user_id: @user1.id,
  text: "Pro et libris denique, discere cotidieque id eos. Eu dissentiet disputationi vix, ut accumsan qualisque eos, ad pri sale facilisis. No nec verear splendide, eam quem enim ei. Assum dissentiunt quo in. Eius necessitatibus cu cum, id eum habeo adipiscing. Duo ex commodo scriptorem, vim ex quas everti lobortis."
  )

  Feedback.create!(
  segment_id: @seg2.id,
  user_id: @user2.id,
  text: "Et copiosae facilisis consequuntur qui. Quem democritum vim ea, vim everti sadipscing in. Nam quando homero cetero ea, te est natum dictas inimicus, his tota facilisi te. Per iriure utroque facilis ut."
  )

  Feedback.create!(
  segment_id: @seg2.id,
  user_id: @user1.id,
  text: "Pro et libris denique, discere cotidieque id eos. Eu dissentiet disputationi vix, ut accumsan qualisque eos, ad pri sale facilisis. No nec verear splendide, eam quem enim ei. Assum dissentiunt quo in. Eius necessitatibus cu cum, id eum habeo adipiscing. Duo ex commodo scriptorem, vim ex quas everti lobortis."
  )



puts "DONE!"


puts "Making Followers..."

adrian.following_relationships.create!(
  follower_id: kon.id
)

adrian.following_relationships.create!(
  follower_id: rose.id
)

kim.following_relationships.create!(
  follower_id: rose.id
)

kim.following_relationships.create!(
  follower_id: adrian.id
)

rose.following_relationships.create!(
  follower_id: kim.id
)

rose.following_relationships.create!(
  follower_id: adrian.id
)

# For testing duplication of followers
# rose.following_relationships.create!(
#   follower_id: adrian.id
# )

kon.following_relationships.create!(
  follower_id: rose.id
)

kon.following_relationships.create!(
  follower_id: adrian.id
)

kon.following_relationships.create!(
  follower_id: kim.id
)

puts "DONE!"


puts "Making Comments..."

@story1.comments.create!(
  user_id: kon.id,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
)
@story1.comments.create!(
  user_id: rose.id,
  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
)


puts "DONE!"


