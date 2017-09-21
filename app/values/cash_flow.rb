class CashFlow

	# this object needs to handle debt minimum payments in its cash flow equations, which makes me think that we need to create the debts before we change them all. Which would require to create debts, accounts, savings, in the new month object before creating cashflow.
	include ActiveModel::Validations

	attr_accessor :income, :spending, :amount, :total_min_payments

	def initialize(args)
		@income = args[:income]
		@spending = args[:spending]
		@total_min_payments = args[:total_min_payments]
		self.amount = generate_cash_flow
	end

	def generate_cash_flow
		total_spending = spending.amount + total_min_payments
		amount = (income.amount - total_spending).round(2)
		validate_amount(amount)
		return amount
	end

	def validate_amount(amount)
		self.errors.add(:base, "Negative cashflow is not allowed") if amount < 0
	end
end
