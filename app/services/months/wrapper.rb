class Months::Wrapper

	attr_reader :user

	def initialize(args)
		@user = args[:user]
	end

	def call
		month = Months::CreateMonthDate.new(user: user).call
		Months::GenerateMonth.new(month: month, previous_finance:user).create_finances_for_new_month
		cash_flow = Months::CalculateCashFlow.new(month: month).call
		Months::MonthRecommendations.new(cash_flow).call
	end
end
