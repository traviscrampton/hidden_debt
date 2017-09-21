class Months::CalculateCashFlow

	attr_reader :month

	def initialize(args)
		@month = args[:month]
	end

	def call
		return {month: month, cash_flow: create_cash_flow_for_new_month}
	end

	def create_cash_flow_for_new_month
		CashFlow.new(income: month.income, spending: month.spending, total_min_payments: total_minimum_payment)
	end

	def total_minimum_payment
		total_min_payments = 0
		month.debts.each do |debt|
			total_min_payments += debt.subtract_min_payment
		end
		total_min_payments
	end
end
