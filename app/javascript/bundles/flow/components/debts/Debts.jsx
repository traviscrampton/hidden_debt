import React from 'React';
import PropTypes from 'prop-types';

const Debts = props =>(
	{props.records.map(debt, index) => {
		return <Debt
					key={index}
					name={debt.name}
					amount={debt.amount}
					interest_rate={debt.interest_rate}
					minimum_payment={debt.minimum_payment} />
	}}
)


Debts.PropTypes = {
	records: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		interest_rate: PropTypes.number.isRequired,
		minimum_payment: PropTypes.number.isRequired
	})
}

export default Debts;
