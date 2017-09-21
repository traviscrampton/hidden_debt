class Spending < ActiveRecord::Base
	include SharedMethods
	
	belongs_to :spendable, polymorphic: true

	def three_months
		amount*3
	end
end
