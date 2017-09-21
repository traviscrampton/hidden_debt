class Months::MonthRecommendations

	attr_reader :month, :cash_flow

	def initialize(args)
		@month = args[:month]
		@cash_flow = args[:cash_flow]
	end

	def call
		if month.has_three_months_spending
			transfer_to_debt
		else
			transfer_to_savings
		end
		return month
	end

	def transfer_to_savings
		transfer_goal = month.spending.three_months - month.saving.amount
		if transfer_goal <= cash_flow.amount
			transfer_part_savings(transfer_goal)
			self.call unless cash_flow.amount == 0
		else
			transfer_all_savings
		end
	end

	def transfer_part_savings(transfer_goal)
		create_saving_goal(transfer_goal)
		cash_flow.amount -= transfer_goal
		# new_saving_amount = month.saving.amount + transfer_goal
		# month.saving.update(amount: new_saving_amount)
	end

	def transfer_all_savings
		new_saving_amount = month.saving.amount + cash_flow.amount
		create_saving_goal(cash_flow.amount)
		cash_flow.amount = 0
		# month.saving.update(amount: new_saving_amount)
	end

	def create_saving_goal(transfer_goal)
		month.saving.goals.create(amount: transfer_goal)
	end

	def transfer_to_debt
		month.debts.order(interest_rate: :desc).each do |debt|
			break if cash_flow.amount == 0
			if debt.amount <= cash_flow.amount
				transfer_part_to_debt(debt)
			else
				transfer_all_to_debt(debt)
			end
		end
	end

	def transfer_part_to_debt(debt)
		cash_flow.amount -= debt.amount
		create_debt_goal(debt, debt.amount)
		# debt.update(amount: 0)
	end

	def transfer_all_to_debt(debt)
		# towards_debt = debt.amount - cash_flow.amount
		create_debt_goal(debt, cash_flow.amount)
		cash_flow.amount = 0
		# debt.update(amount: towards_debt)
	end

	def create_debt_goal(debt, amount)
		debt.goals.create(amount: amount)
	end


	# What needs to happen here
	# 1. make sure that savings is greater than 3 months spending
	# => 1a. if not then take to object that handles that interaction
	#	2. If there is anything left then go over to debt and you can decide
end
