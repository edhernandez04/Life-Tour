class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :username
      t.string :password_digest
      t.string :summary

      t.timestamps
    end
  end
end
