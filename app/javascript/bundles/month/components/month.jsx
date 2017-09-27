import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../flow/components/layouts/Header';
import PlanContainer from '../components/plans/Plan_container';

export default class Month extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {}
	}

	render(){
		return(
			<div id="month">
				<Header bigText={this.props.date} subText="Let's stick to a plan."/>
				<PlanContainer />
			</div>
		)
	}
}

Month.PropTypes = {

}
