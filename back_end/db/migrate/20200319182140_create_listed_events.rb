class CreateListedEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :listed_events do |t|
      t.integer :tour_id
      t.integer :event_id

      t.timestamps
    end
  end
end
