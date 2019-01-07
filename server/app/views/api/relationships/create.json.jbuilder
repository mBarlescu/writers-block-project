json.author_followers do
 json.call(
  json.number @author_followers
 )
end

json.relationship_id do
 json.call(
  json.id @relationship_id
 )
end