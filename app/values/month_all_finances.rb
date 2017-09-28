class MonthAllFinances

	attr_reader :month

	def initialize(args)
		@month = args[:month]
	end

	def call
		all_attrs = {"date": month.date_string}
		all_attrs['goals'] = parse_goals(month.goals)
		all_attrs.to_json
	end

	def parse_goals(goals)
		grouped = goals.group_by {|g| g.goalable}
		goalz = generate_goals_json(grouped)
	end


	private

	def generate_goals_json(grouped)
		return grouped.map do |finance, goals|
			attrs = {}
			attrs['finance'] = finance.attributes.slice('id')
			attrs['finance']['amount'] = currency_amount(finance.amount)
			attrs['finance']['type'] = finance.class.name
			attrs['goalAmount'] = calculate_string_amounts(goals)
			attrs
		end
	end

	def calculate_string_amounts(goals)
		goals_dec = goals.inject(0) {|sum, goal| sum += goal.amount}
		currency_amount(goals_dec)
	end

	def currency_amount(str)
		 sprintf("%.2f", str.truncate(2))
	end

end
