class CreateTours < ActiveRecord::Migration[6.0]
  def change
    create_table :tours do |t|
      t.string :title
      t.string :summary
      t.string :tour_pic
      t.integer :user_id

      t.timestamps
    end
  end
end
