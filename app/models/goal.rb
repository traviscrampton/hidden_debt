class Goal < ActiveRecord::Base
	include SharedMethods
	
	belongs_to :goalable, polymorphic: true
end
