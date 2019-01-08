json.stories do
  json.array! @stories do |item|
    json.id item.id
    json.title item.title
    json.image item.image
    json.description item.description
    json.user_id item.user_id
    json.first_name item.user.first_name
    json.last_name item.user.last_name
  end
end

json.genre do
  json.call(
    @genre,
    :id,
    :name
  )
end