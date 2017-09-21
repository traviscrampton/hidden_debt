class HomeController < ApplicationController

	def index
	end

	def flow
		@flow = Setup::Flow.new(current_user).generate
	end
end
