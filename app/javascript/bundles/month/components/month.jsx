import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../flow/components/layouts/Header';
import PlanContainer from '../components/plans/Plan_container';

const Month = props => (
		<div id="month">
			<Header bigText={props.date} subText={props.smallText}/>
			<div className="activebox__block">
				<PlanContainer monthId={props.monthId}/>
			</div>
		</div>
)

Month.PropTypes = {
	monthId: PropTypes.number,
	date: PropTypes.string,
	smallText: PropTypes.string
}

export default Month;
