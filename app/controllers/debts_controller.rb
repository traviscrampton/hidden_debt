class DebtsController < ApplicationController

	respond_to :json, only: [:create, :destroy]

	def create
		debt = current_user.debts.new(debt_params)
		debt.save!
		render json: current_user.debt_currency_attrs
	end

	def update
		debt = Debt.find params[:id]
		debt.update(debt_params)
		respond_with debt
	end

	def destroy
		debt = Debt.find(params[:id])
		debt.destroy
		respond_with debt
	end

	private

	def debt_params
		params.permit(:amount, :minimum_payment, :interest_rate, :name)
	end
end
