import PropTypes from 'prop-types';
import axios from 'axios';
import React from 'react';
import Header from '../components/layouts/Header';
import NavButton from '../components/layouts/NavButton';
import ActiveBox from '../components/layouts/Active_box';

export default class Flow extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			navButtons: this.props.navButtons,
			activeFinance: this.setActiveFinance(),
			calculation: this.readyForCalculation(this.props.navButtons)
		}
	}

	readyForCalculation(categories){
		let falseCategories = categories.find((btn) => {
			return btn.completed == false
		})

		return falseCategories == undefined
	}

	handleButtonClick(index){
		let activeBtn = this.state.navButtons[index]
		for(let btn of this.state.navButtons){
			btn.active = false
		}
		activeBtn.active = true;
		this.state.activeFinance = activeBtn
		this.setState(this.state)
	}

	setActiveFinance(){
		return this.props.navButtons.find((btn) => { return btn.active == true})
	}

	persistFinance(data){
		axios.post(this.state.activeFinance.url, {
			data
		})
		.then((finance) => this.handleSuccess(finance))
		.catch((response) => console.log('Oops there has been a booboo') )
		// axios({
		// 	url: this.state.activeFinance.url,
		// 	type: 'POST',
		// 	data: data
		// })
		// .then((finance) => this.handleSuccess(finance))
	}

	handleSuccess(finance){
		var activeFinance = this.state.activeFinance
		activeFinance.completed = true
		activeFinance.records = finance
		var index = this.state.navButtons.indexOf(activeFinance)
		if(index < 3){
			this.state.navButtons[index + 1].accessible = true
			this.state.activeFinance = this.state.navButtons[index + 1]
		}
		var calculation = this.readyForCalculation(this.state.navButtons)
		this.state.readyForCalculation = calculation
		this.setState(this.state)
	}

	deleteDebt(index){
		var debt = this.state.activeFinance.records[index]
		var url = this.state.activeFinance.url + `/${debt.id}`
		$.ajax({
			url: url,
			type: "DELETE",
			context: this,
			data: debt,
			success: response => this.handleDebtRemoval(index),
			error: response => console.log("That did not work")
		})
	}

	handleDebtRemoval(index){
		let activeFinance = this.state.activeFinance
		let calculation = this.readyForCalculation(this.state.navButtons)
		activeFinance.records.splice(index, 1);
		if(activeFinance.records.length == 0){
			activeFinance.completed = false
		}
		this.state.readyForCalculation = calculation
		this.setState(this.state)
	}

	buttonStyles(button){
		let className = "navbutton__block--btn"
		if(button.completed){
			className += " completed accessible"
		} else if(button.accessible){
			className += " accessible"
		}
		if(button.active){className += " active"}

		return className
	}

	render(){
		return(
			<div id="flow">
				<Header
					bigText="Let's get out of debt"
					subText="But first we need some basic finances" />
					<div className="navbutton__block">
						{this.state.navButtons.map((button, index) => {
							return <NavButton
								key={index}
								name={button.name}
								completed={button.completed}
								accessible={button.accessible}
								active={this.state.activeFinance == button}
								prompt={button.prompt}
								buttonStyles = {this.buttonStyles(button)}
								buttonClick={() => this.handleButtonClick(index)}/>
						})}
					</div>
					<div className="activebox__block">
						<ActiveBox
							completed={this.state.activeFinance.completed}
							prompt={this.state.activeFinance.prompt}
							record={this.state.activeFinance.records}
							name={this.state.activeFinance.name}
							persistFinance={(data) => this.persistFinance(data)}
							deleteDebt={this.deleteDebt} />
					</div>
			</div>
		)
			// 	<div className="calculation__button">
			// 		{this.state.readyForCalculation ?
			// 			<form action="/months" method="POST">
			// 				<button>Calculate Debt Plan</button>
			// 			</form> : ""
			// 		}
			// 	</div>
	}
}

Flow.PropTypes = {
	navButtons: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequred,
		accessible: React.PropTypes.bool.isRequired,
		active: React.PropTypes.bool.isRequired,
		prompt:React.PropTypes.string.isRequired
	}))
}
