class Month < ActiveRecord::Base

	# validates_presence_of :date

	belongs_to :user
	has_one :income, as: :incomeable, dependent: :destroy
	has_one :spending, as: :spendable, dependent: :destroy
	has_one :saving, as: :savingable, dependent: :destroy
	has_many :debts, as: :debtable, dependent: :destroy

	def has_three_months_spending
		saving.amount >= spending.three_months
	end
end
