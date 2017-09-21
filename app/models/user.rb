class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable



	has_one :income, as: :incomeable
	has_one :spending, as: :spendable
	has_one :saving, as: :savingable
	has_many :debts, as: :debtable
	has_many :months



	# this is a method for me to be able to restart everything
	def destroy_finances
		saving.destroy
		income.destroy
		spending.destroy
		debts.destroy_all
	end

	def debt_currency_attrs
		debts.map { |debt| debt.currency_attrs}
	end

end
