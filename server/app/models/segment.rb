class Segment < ApplicationRecord
  belongs_to :story
  has_many :feedbacks
end
