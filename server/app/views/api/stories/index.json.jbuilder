json.popular_stories do
  json.array! @most_popular do |item|
    json.id item.story.id
    json.user_id item.story.user_id
    json.title item.story.title
    json.description item.story.description
    json.image item.story.image
    json.created_at item.story.created_at
    json.likes item.likes
  end
end

json.newest_stories do
  json.array! @newest_stories do |story|
    json.id story.id
    json.user_id story.user_id
    json.title story.title
    json.description story.description
    json.image story.image
    json.created_at story.created_at
    json.likes story.stories_like.size
  end
end
