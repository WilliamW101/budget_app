class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.string :item
      t.float :amount
      t.string :category

      t.timestamps
    end
  end
end
