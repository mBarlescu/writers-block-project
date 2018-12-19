class Segment < ApplicationRecord
  belongs_to :story

  has_many :feedback
end
