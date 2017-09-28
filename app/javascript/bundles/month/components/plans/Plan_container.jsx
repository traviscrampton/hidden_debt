import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import Goal from '../goals/Goal';

export default class PlanContainer extends React.Component{

	constructor(props, context){
		super(props, context)

		this.state = {
			goals: []
		}
	}

	componentDidMount(){
		axios.get(`/months/${this.props.monthId}/goals`)
		.then((response) => this.bootUpState(response))
	}

	bootUpState(response){
		this.state = response.data
		this.setState(this.state)
	}


	render(){
		return(
			<div>
				<div className="plans__container">
					{this.state.goals.map((goal, index) => {
						return <Goal
							key={index}
							id={goal.id}
							amount={goal.amount}
							name={goal.name}
							type={goal.type}
							goalAmount={goal.goalAmount} />
					})}
				</div>
				<div className="projections__container">
					// interest rate calculations
				</div>
			</div>
		)
	}

}

PlanContainer.PropTypes = {
	monthId: PropTypes.number
}
