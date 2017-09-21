class InterestRates::PerMonth

	attr_reader :amount, :interest_rate

	def initialize(args)
		@amount = args[:amount]
		@interest_rate = args[:interest_rate]
	end

	def calculate
		amount*(1 + (interest_rate/12))**(12)

		#things to noodle => Should the thought be how much is being paid in interest and should that be persisted anywhere?
	end
end
