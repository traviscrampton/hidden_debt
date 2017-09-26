import React from 'react'
import PropTypes from 'prop-types'
import DebtForm from '../forms/Debt_form';
import Debt from '../debts/Debt';

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
					deleteDebt={() => handleDelete(props, index)} />
			})}
		</div>
	</div>
)

const handleDelete = (props, index) => {
	props.deleteDebt(index)
}

DebtContainer.propTypes = {
	records: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		interest_rate: PropTypes.string.isRequired,
		minimum_payment: PropTypes.string.isRequired,
	})),
	persistFinance: PropTypes.func.isRequired,
	deleteDebt: PropTypes.func.isRequired
}

export default DebtContainer;
