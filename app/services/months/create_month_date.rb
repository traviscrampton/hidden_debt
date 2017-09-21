class Months::CreateMonthDate
	require "active_support"

	attr_reader :user

	def initialize(args)
		@user = args[:user]
	end

	# this will create the next month instead of this month

	def call
		get_first_month
	end

	def get_first_month
		date = Date.today.at_beginning_of_month.next_month
		month = user.months.new(date: date)
		month.save!
		return month
	end

end
