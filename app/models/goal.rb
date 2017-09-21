class Goal < ActiveRecord::Base
	belongs_to :goalable, polymorphic: true
end
