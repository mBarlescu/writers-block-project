class FeedbackLike < ApplicationRecord
  belongs_to :user
  belongs_to :feedback
end


def self.user_liked_feedback (user_id, feedback_id) 
  StoriesLike.where(user_id: current_user.id, story_id: @story.id) != []
end
