class StoriesLike < ApplicationRecord
  belongs_to :user
  belongs_to :story
  validates :user, uniqueness: { scope: :story}
end
