import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../flow/components/layouts/Header';

export default class Month extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {}
	}

	render(){
		return(
			<div>
				<Header bigText={this.props.date} subText='lets see how it goes'/>
			</div>
		)
	}
}

Month.PropTypes = {

}
