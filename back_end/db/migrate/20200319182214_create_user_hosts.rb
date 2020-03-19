class CreateUserHosts < ActiveRecord::Migration[6.0]
  def change
    create_table :user_hosts do |t|
      t.integer :user_id
      t.integer :tour_id

      t.timestamps
    end
  end
end
