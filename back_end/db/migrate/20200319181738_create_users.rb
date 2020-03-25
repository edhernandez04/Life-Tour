class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :username
      t.string :password_digest
      t.string :summary
      t.string :profile_pic

      t.timestamps
    end
  end
end
