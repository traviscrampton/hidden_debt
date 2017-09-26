class DecimalGoal < ActiveRecord::Migration[5.1]
  def change
		remove_column :goals, :amount
		add_column :goals, :amount, :decimal
  end
end
