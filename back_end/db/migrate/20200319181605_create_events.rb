class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.datetime :date
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
