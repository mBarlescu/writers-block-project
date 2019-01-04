json.comments do
  json.array! @comments do |comment|
    json.id comment.id
    json.text comment.text
    json.created_at comment.created_at
    json.first_name comment.user.first_name
    json.last_name comment.user.last_name
  end
end