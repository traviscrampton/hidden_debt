import PropTypes from 'prop-types';
import React from 'react';

// still consider not being able to send up anything until all the fields are filled out --> After that we focus on how to make a sane design.

export default class DebtForm extends React.Component{

	constructor(props, context){
		super(props, context)
		
		this.state = {
			name: '',
			amount: '',
			interest_rate: '',
			minimum_payment: ''
		}
	}

	onInputChange(e){
		let key = e.target.name
		this.state[key] = e.target.value
		this.setState(this.state)
	}

	onSubmit(e){
		e.preventDefault();
		this.props.persistFinance(this.state)
		this.clearForm();
	}

	clearForm(){
		this.state = {
			name: '',
			amount: '',
			interest_rate: '',
			minimum_payment: ''
		}
		this.setState(this.state)
	}

	render(){
		return(
			<form onSubmit={this.onSubmit.bind(this)} className="debt__container__block--form">
				<div>
					<input autoFocus='true' type="text" name="name" onChange={this.onInputChange.bind(this)} value={this.state.name} placeholder="Name of Debt"/>
				</div>
				<div>
					<input type="number" name="amount" onChange={this.onInputChange.bind(this)} value={this.state.amount} placeholder="Amount e.g. 15000.00" />
				</div>
				<div>
					<input type="number" name="interest_rate" onChange={this.onInputChange.bind(this)} value={this.state.interest_rate} placeholder="interest rate e.g. 0.09" />
				</div>
				<div>
					<input type="number" name="minimum_payment" onChange={this.onInputChange.bind(this)} value={this.state.minimum_payment} placeholder="Minimum Monthly Payment" />
				</div>
				<label>
					<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
					</svg>
					<input type="submit" />
				</label>
			</form>
		)
	}
}

DebtForm.PropTypes = {
		persistFinance: PropTypes.func.isRequired
}
