class GoalsController < ApplicationController

	def show
		month = Month.find params[:month_id]
		render json: MonthAllFinances.new(month: month).call
	end
end
