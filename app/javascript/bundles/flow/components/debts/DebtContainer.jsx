import React from 'react'
import PropTypes from 'prop-types'

const DebtContainer = props =>(
	<div className="debt__container__block cf">
		<DebtForm persistFinance={props.persistFinance}/>
		<div className="debt__container__block--debts">
				<Debts records={props.records}/>
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
