import React from 'react'
import PropTypes from 'prop-types'
import DebtContainer from '../debts/DebtContainer';

const ActiveBox = props => {
	if(props.name == "Debts"){
	return <DebtContainer deleteDebt={props.deleteDebt} persistFinance={props.persistFinance} records={props.record}/>
	} else if(props.completed) {
		return(
			<div className="activeBox__block--box">
				<div className="activebox__block--prompt">
					{props.prompt}
				</div>
				<div className="activebox__block--persisted">
					$ {props.record.amount}
				</div>
			</div>
		)
	} else {
		return(
			<div className="activeBox__block--box">
				<div className="activebox__block--prompt">
					{props.prompt}
				</div>
				single finance form
			</div>
		)
	}
}


ActiveBox.propTypes = {
	completed: PropTypes.bool.isRequired,
	prompt: PropTypes.string.isRequired,
	persistFinance: PropTypes.func.isRequired,
	deleteDebt: PropTypes.func.isRequired
}

export default ActiveBox;
