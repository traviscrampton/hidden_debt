import React from 'react'
import PropTypes from 'prop-types'
import DebtContainer from '../debts/DebtContainer';
import SingleFinanceForm from '../forms/Single_finance_form';

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
				<SingleFinanceForm persistFinance={props.persistFinance} />
			</div>
		)
	}
}


ActiveBox.propTypes = {
	completed: PropTypes.bool,
	prompt: PropTypes.string,
	persistFinance: PropTypes.func,
	deleteDebt: PropTypes.func
}

export default ActiveBox;
