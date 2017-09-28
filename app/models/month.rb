class Month < ActiveRecord::Base

	# validates_presence_of :date

	belongs_to :user
	has_one :income, as: :incomeable, dependent: :destroy
	has_one :spending, as: :spendable, dependent: :destroy
	has_one :saving, as: :savingable, dependent: :destroy
	has_many :debts, as: :debtable, dependent: :destroy

	def has_three_months_spending
		saving.amount >= spending.three_months || goals_to_three_months_spending?
	end

	def goals_to_three_months_spending?
		total_amount = saving.amount + saving.goals.sum("amount")
		total_amount >= spending.three_months
	end

	def date_string
		date.strftime("%B") + " " + date.strftime("%Y")
	end

	def goals
		(saving.goals + debts.flat_map { |debt| debt.goals }).flatten
	end

end
