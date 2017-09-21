class Debt < ActiveRecord::Base
	include SharedMethods
	
	belongs_to :debtable, polymorphic: true
	has_many :goals, as: :goalable, dependent: :destroy

	def subtract_min_payment
		subtracted = minimum_payment <= amount ? minimum_payment : amount
		new_amount = self.amount - subtracted
		self.update(amount: new_amount)
		return subtracted
	end
end
