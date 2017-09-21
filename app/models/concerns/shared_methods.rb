module SharedMethods
	extend ActiveSupport::Concern

	def to_currency
		sprintf("%.2f", amount.truncate(2))
	end

	def currency_attrs
		attrs = attributes
		attrs["amount"] = to_currency
		attrs
	end
end
