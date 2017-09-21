class CreateSchema < ActiveRecord::Migration[5.1]
  def change

		create_table :debts do |t|
			t.string :name
			t.string :debtable_type
			t.integer :debtable_id
			t.decimal :amount, :precision => 15, :scale => 8
			t.decimal :interest_rate,  :precision => 15, :scale => 8
			t.decimal :minimum_payment, :precision => 15, :scale => 8
			t.timestamps
		end

		create_table :incomes do |t|
			t.integer :incomeable_id
			t.string :incomeable_type
			t.decimal :amount, :precision => 15, :scale => 8
			t.timestamps
		end

		create_table :spendings do |t|
			t.decimal :amount, :precision => 15, :scale => 8
			t.integer :spendable_id
			t.string :spendable_type
			t.timestamps
		end

		create_table :savings do |t|
			t.decimal :amount, :precision => 15, :scale => 8
			t.integer :savingable_id
			t.string :savingable_type
			t.timestamps
		end

		create_table :months do |t|
			t.integer :user_id
			t.datetime :date
			t.timestamps
		end

		create_table :goals do |t|
			t.integer :goalable_id
			t.string :goalable_type
			t.float :amount
		end


  end
end
