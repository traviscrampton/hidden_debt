class SavingsController < ApplicationController

	respond_to :json, only: [:create, :update, :destroy]

	def create
		saving = current_user.build_saving(saving_params)
		saving.save!
		render json: saving.currency_attrs
	end

	def update
		saving = Income.find params[:id]
		saving.update(saving_params)
		respond_with saving
	end

	def destroy
		saving = Income.find(params[:id])
		saving.destroy
		respond_with saving
	end

	private

	def saving_to_currency(saving)
		attrs = saving.attributes
		attrs['amount'] = saving.to_currency
		attrs
	end

	def saving_params
		params.permit(:amount)
	end
end
