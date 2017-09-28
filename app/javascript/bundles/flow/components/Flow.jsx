import PropTypes from 'prop-types';
import axios from 'axios';
import React from 'react';
import Header from '../components/layouts/Header';
import NavButton from '../components/layouts/NavButton';
import ActiveBox from '../components/layouts/Active_box';
import CalculationButton from '../components/forms/Calculation_button';


export default class Flow extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			navButtons: [],
			activeFinance: {},
			calculation: false
		}
	}

	componentDidMount(){
		axios.get('/flows')
		.then((response) => this.handleMounting(response.data))
	}

	handleMounting(response){
		this.state.navButtons = response['navButtons'];
		this.state.activeFinance = this.setActiveFinance(this.state.navButtons);
		this.state.calculation = response['calculation'];
		this.setState(this.state)
	}

	readyForCalculation(categories){
		let falseCategories = categories.find((btn) => {
			return btn.completed == false
		})

		return falseCategories == undefined
	}

	handleButtonClick(index){
		let targetBtn = this.state.navButtons[index]
		if(targetBtn.accessible){
			this.state.activeFinance = targetBtn
			this.setState(this.state)
		}
	}

	setActiveFinance(navButtons){
		return navButtons.find((btn) => { return btn.active == true})
	}

	persistFinance(data){
		axios.post(this.state.activeFinance.url, {
			data
		})
		.then((response) => this.handleSuccess(response.data))
		.catch((response) => console.log(response) )
	}

	handleSuccess(finance){
		var activeFinance = this.state.activeFinance
		activeFinance.completed = true
		activeFinance.records = finance
		var index = this.state.navButtons.indexOf(activeFinance)
		if(index < 3){
			let newActive = this.state.navButtons[index + 1];
			newActive.accessible = true
			this.state.activeFinance = newActive
		}
		this.setCalculationState();
		debugger;
		this.setState(this.state)
	}

	deleteDebt(index){
		let debt = this.state.activeFinance.records[index]
		let url = this.state.activeFinance.url + `/${debt.id}`
		axios.delete(url, {
			debt
		})
		.then((response) => this.handleDebtRemoval(index))
		.catch((response) => console.log('Oops there has been a booboo') )
	}

	handleDebtRemoval(index){
		let activeFinance = this.state.activeFinance
		activeFinance.records.splice(index, 1);
		if(activeFinance.records.length == 0){
			activeFinance.completed = false
		}
		this.setCalculationState();
		this.setState(this.state)
	}

	setCalculationState(){
		let calculation = this.readyForCalculation(this.state.navButtons)
		this.state.calculation = calculation
	}

	buttonStyles(button){
		let className = "navbutton__block--btn"
		if(button.completed){
			className += " completed accessible"
		} else if(button.accessible){
			className += " accessible"
		}
		if(this.state.activeFinance == button){className += " active"}

		return className
	}

	renderCalculationButton(){
		if(this.state.calculation){
			return <CalculationButton />
		}
	}

	render(){
		return(
			<div id="flow">
				{ this.renderCalculationButton() }
				<Header
					bigText="Let's get out of debt"
					subText="But first we need some basic finances" />
					<div className="navbutton__block">
						{this.state.navButtons.map((button, index) => {
							return <NavButton
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
							deleteDebt={(index) => this.deleteDebt(index)} />
					</div>
			</div>
		)
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
