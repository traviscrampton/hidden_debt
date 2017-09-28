class InterestRates::PerMonth

	attr_reader :amount, :interest_rate

	def initialize(args)
		@amount = args[:amount]
		@interest_rate = args[:interest_rate]
	end

	def calculate
		# come back to this to properly calculate monthly interest rate
		amount*(1 + (interest_rate/12))**(1/12)
	end
end
