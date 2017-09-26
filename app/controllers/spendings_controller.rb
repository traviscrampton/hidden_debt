class SpendingsController < ApplicationController

	respond_to :json, only: [:create, :update, :destroy]

	def create
		spending = current_user.build_spending(spending_params)
		spending.save!
		render json: spending.currency_attrs
	end

	def update
		spending = Spending.find params[:id]
		spending.update(spending_params)
		respond_with spending
	end

	def destroy
		spending = Spending.find(params[:id])
		spending.destroy
		respond_with spending
	end

	private

	def spending_params
		params.require(:data).permit(:amount)
	end
end
