class FlowsController < ApplicationController
	respond_to :json, only: [:index]

	def index
		flow = Setup::Flow.new(current_user).generate
		render json: flow
	end
end
