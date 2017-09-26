import PropTypes from 'prop-types';
import React from 'react';

const CalculationButton = props => (
		<div className="calculation__button">
			<form action="/months" method="POST">
				<button>Calculate Debt Plan</button>
			</form>
		</div>
)

export default CalculationButton;
