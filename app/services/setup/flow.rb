class Setup::Flow

	# this will loop through all the classes in the nav bar and if they exist then it will generate the proper records and make the next one accessable

	NAV_BUTTONS = [
		{
			name:'Income',
			completed: false,
			prompt:"On average and after tax how much money do you make in a month?",
			accessible: true,
			active: false,
			url:'/incomes',
			records: []
		},
		{
			name:'Saving',
			completed: false,
			prompt:"How much money do you have in your savings?",
			accessible: false,
			active: false,
			url:'/savings',
			records: []
		},
		{
			name:'Spending',
			completed: false,
			prompt:"On average in a given month how much money do you spend?",
			accessible: false,
			active: false,
			url:'/spendings',
			records: []
		},
		{
			name:'Debts',
			completed: false,
			prompt:"",
			accessible: false,
			active: false,
			url:'/debts',
			records: []
		}
	]


	attr_reader :user
	def initialize(user)
		@user = user
	end

	def generate
		find_completed_and_accessible
		find_active_btn
		return NAV_BUTTONS
	end

	def find_completed_and_accessible
		NAV_BUTTONS.each_with_index do |btn, index|
			finances = user.send(btn[:name].downcase)
			next if finances.blank?
			btn[:completed] = true
			NAV_BUTTONS[index + 1][:accessible] = true unless index == 3

			btn[:records] = if btn[:name] != "Debts"
				finances.currency_attrs
			else
				finances.map { |debt| debt.currency_attrs }
			end
		end

		find_active_btn
	end

	def find_active_btn
		active = NAV_BUTTONS.select{ |btn|
			btn[:accessible] == true
		}.last
		active[:active] = true
	end
end
