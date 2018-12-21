class CreateRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :relationships do |t|
      t.integer :following_id
      t.integer :follower_id
      t.date :created_at
      t.date :updated_at
      t.foreign_key :users, column: :following_id, primary_key: :id, on_delete: :cascade
      t.foreign_key :users, column: :follower_id, primary_key: :id, on_delete: :cascade
      t.timestamps
    end
  end
end
