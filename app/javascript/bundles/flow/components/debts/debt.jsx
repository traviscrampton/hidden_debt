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
	name: React.PropTypes.string.isRequired,
	amount: React.PropTypes.number.isRequired,
	interest_rate: React.PropTypes.number.isRequired,
	minimum_payment: React.PropTypes.number.isRequired,
	deleteDebt: React.PropTypes.func.isRequired
}

export default Debt;
