class MonthAllFinances

	attr_reader :month

	def initialize(args)
		@month = args[:month]
	end

	def call
		attrs = month.attributes
		attrs['date'] = @month.date_string
		attrs[:finances] = {
			income: month.income.attributes,
			spending: month.spending.attributes,
			saving: get_saving_json,
			debts: get_debt_json
		}
		attrs
	end

	def get_saving_json
		attrs = month.saving.attributes
		attrs[:amount] = month.saving.to_currency
		attrs[:goals] = month.saving.goals.sum('amount')
		attrs
	end

	def get_debt_json
		month.debts.map do |debt|
			attrs = debt.attributes
			attrs[:amount] = debt.to_currency
			attrs[:goals] = debt.goals.sum('amount')
			attrs
		end
	end
end
