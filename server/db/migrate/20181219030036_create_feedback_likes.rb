class CreateFeedbackLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :feedback_likes do |t|
      t.integer :feedback_id
      t.integer :user_id

      t.timestamps
    end
  end
end
