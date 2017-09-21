class MonthAllFinances

	attr_reader :month

	def initialize(args)
		@month = args[:month]
	end

	def call
		attrs = month.attributes
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
		attrs[:goals] = month.saving.goals.map(&:attributes)
		attrs
	end

	def get_debt_json
		month.debts.map do |debt|
			attrs = debt.attributes
			attrs[:goals] = debt.goals.map(&:attributes)
			attrs
		end
	end
end
