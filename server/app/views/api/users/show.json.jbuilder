json.author do 
  json.call(
    @user,
    :id,
    :first_name,
    :last_name,
    :description,
    :email,
    :image
  )
end

json.author_stories do
  json.array! @stories, :id, :title, :image, :description
end

json.number_of_followers do
 json.call(
  json.number @author_followers
 )
end

p "IMPRIMINDO O RELATIONSHIP #{@relationship}"
  json.relationship do
    json.call(
      @relationship,
      :id,
      :following_id, 
      :follower_id
    )
  end                                                 


