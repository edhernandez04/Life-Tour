class CreateUserAttendings < ActiveRecord::Migration[6.0]
  def change
    create_table :user_attendings do |t|
      t.integer :tour_id
      t.integer :user_id

      t.timestamps
    end
  end
end
