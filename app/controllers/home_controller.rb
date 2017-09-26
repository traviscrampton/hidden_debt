class HomeController < ApplicationController
	before_action :auth_user, only:[:flow]

	def index
	end

	def flow
		flow = Setup::Flow.new(current_user).generate
		@flow = flow.to_json
	end

	private

	def auth_user
			redirect_to root_path if !user_signed_in?
	end
end
