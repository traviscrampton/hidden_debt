class Months::GenerateMonth

	attr_reader :previous_finance, :month

	def initialize(args)
		@previous_finance = args[:previous_finance]
		@month = args[:month]
	end

	def create_finances_for_new_month
		create_income
		create_saving
		create_spending
		create_debts
	end

	private

	def create_income
		income_attrs = previous_finance.income.attributes.slice("amount", "name")
		month.create_income(income_attrs)
	end

	def create_saving
		saving_attrs = previous_finance.saving.attributes.slice("amount", "name")
		month.create_saving(saving_attrs)
	end

	def create_spending
		spending_attrs = previous_finance.spending.attributes.slice("amount")
		month.create_spending(spending_attrs)
	end

	def create_debts
		previous_finance.debts.each do |debt|
			debt_attrs = debt.attributes.slice("name", "interest_rate", "minimum_payment")

			after_interest = InterestRates::PerMonth.new(amount: debt.amount, interest_rate: debt.interest_rate ).calculate

			debt_attrs[:amount] = after_interest

			month.debts.create(debt_attrs)
		end
	end
end
