class HomeController < ApplicationController
	before_action :auth_user, only:[:flow]

	def index
	end

	def flow
		
	end

	private

	def auth_user
			redirect_to root_path if !user_signed_in?
	end
end
