class HomeController < ApplicationController

	def index
	end

	def flow
		flow = Setup::Flow.new(current_user).generate
		@flow = flow.to_json
	end
end
