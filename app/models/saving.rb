class Saving < ActiveRecord::Base
	include SharedMethods

	belongs_to :savingable, polymorphic: true
	has_many :goals, as: :goalable, dependent: :destroy
end
