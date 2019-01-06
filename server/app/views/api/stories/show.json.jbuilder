json.story do 
  json.call(
    @story,
    :id,
    :title,
    :description,
    :image
  )
end

json.user_liked_story do
 json.call(
  json.boolean @user_liked_story
 )
end

json.author do 
  json.call(
    @author,
    :id,
    :first_name,
    :last_name
  )
end

json.genres do
  json.array! @genres, :id, :name
end

json.author_stories do
  json.array! @author_stories, :id, :title, :image, :description
end

json.comments do
  json.array! @comments do |comment|
    json.id comment.id
    json.text comment.text
    json.created_at comment.created_at
    json.first_name comment.user.first_name
    json.last_name comment.user.last_name
  end
end

json.number_of_likes do
 json.call(
  json.number @number_of_likes
 )
end


