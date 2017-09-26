import React from 'react'
import PropTypes from 'prop-types'
import DebtForm from '../forms/Debt_form';

const DebtContainer = props =>(
	<div className="debt__container__block cf">
		<DebtForm persistFinance={props.persistFinance}/>
		<div className="debt__container__block--debts">
			{props.records.map((debt, index) => {
				return <Debt
					key={index}
					name={debt.name}
					amount={debt.amount}
					interest_rate={debt.interest_rate}
					minimum_payment={debt.minimum_payment}
					deleteDebt={function(){this.handleDebtClick(props, index)}} />
			})}
		</div>
	</div>
)

DebtContainer.propTypes = {
	records: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		interest_rate: PropTypes.number.isRequired,
		minimum_payment: PropTypes.number.isRequired,
	})),
	persistFinance: PropTypes.func.isRequired,
	deleteDebt: PropTypes.func.isRequired
}

export default DebtContainer;
