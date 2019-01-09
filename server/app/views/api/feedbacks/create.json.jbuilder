

    json.array! @feedbacks do |item|
    
        json.id item.id
        json.segment_id item.segment_id
        json.text item.text
        json.created_at item.created_at
        json.first_name item.user.first_name
        json.last_name item.user.last_name
     
   
    end
