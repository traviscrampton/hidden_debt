class MonthsController < ApplicationController

	def create
		month = Months::Wrapper.new(user: current_user).call
		redirect_to month_path(month)
	end

	def show
		month = Month.find params[:id]
		month_data = MonthAllFinances.new(month: month).call
	end
end
