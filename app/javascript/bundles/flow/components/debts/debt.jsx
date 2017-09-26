import React from 'react';
import PropTypes from 'prop-types';

const Debt = props =>(
	<div className="debt__box">
		<div className="debt__box--top cf">
			<span className="debt__box--left">
				<strong>{props.name}</strong>
				<span className="delete__cta" onClick={props.deleteDebt}>
					Delete
				</span>
			</span>
			<span className="debt__box--right">
				<strong>$ {props.amount}</strong>
			</span>
		</div>
		<div className="debt__box--bottom cf">
			<span className="debt__box--left">
				Interest Rate: {props.interest_rate}
			</span>
			<span className="debt__box--right">
				Min Payment: {props.minimum_payment}
			</span>
		</div>
	</div>
)

Debt.propTypes = {
	name: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	interest_rate: PropTypes.string.isRequired,
	minimum_payment: PropTypes.string.isRequired,
	deleteDebt: PropTypes.func.isRequired
}

export default Debt;
