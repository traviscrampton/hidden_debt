import React from 'react';
import PropTypes from 'prop-types';

export default class SingleFinanceForm extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			amount: ''
		}
	}

	onChange(e){
		this.state.amount = e.target.value
		this.setState(this.state)
	}

	onSubmit(e){
		e.preventDefault();
		var data = {"amount":this.state.amount}
		if(data['amount']){
			this.props.persistFinance(data)
			this.state.amount = ""
			this.setState(this.state)
		}
	}

	render(){
		return(
			<div className="activebox__block--singleform">
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input_and_submit">
						$<input autoFocus='true' placeholder="1500.00" type="number" onChange={this.onChange.bind(this) } value={this.state.amount} />
					<label>
						<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"/>
							<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
						</svg>
						<input type="submit" />
					</label>
					</div>
				</form>
			</div>
		)
	}
}

SingleFinanceForm.PropTypes ={
		amount: React.PropTypes.number,
		persistFinance: React.PropTypes.func.isRequired
}
