class FeedbackLike < ApplicationRecord
  belongs_to :user
  belongs_to :feedback
end


def self.get_number_of_likes(feedback_id)
  FeedbackLike.where(feedback_id: feedback_id).count
end
