class Income < ActiveRecord::Base
	include SharedMethods

	belongs_to :incomeable, polymorphic: true
end
