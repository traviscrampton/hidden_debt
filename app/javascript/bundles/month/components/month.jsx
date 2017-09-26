import PropTypes from 'prop-types';
import React from 'react';

export default class Month extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {}
	}

	render(){
		return(
			<div>
				<h1>Month is ready to be rendered HERE </h1>
			</div>
		)
	}
}
