class MonthsController < ApplicationController

	def create
		month = Months::Wrapper.new(user: current_user).call
		redirect_to month_path(month)
	end

	def show
		month = Month.find(params[:id])
		@month = month_attrs(month)
	end

	private

	def month_attrs(month)
		mon_attrs = {}
		mon_attrs['monthId'] = month.id
		mon_attrs['date'] = month.date_string
		mon_attrs['smallText'] = "Lets stick to a plan"
		mon_attrs.to_json
	end

end
