class CreateSocials < ActiveRecord::Migration
  def change
    create_table :socials do |t|
      t.string :name
      t.string :link
      t.string :color

      t.timestamps
    end
  end
end
