import React from 'react';
import PropTypes from 'prop-types';


const Goal = props => (
	<div className="goal__container">
		<div className="goal__container--top">
			<span className="goal--logo">{Goal.icons[props.type]}</span>
			<span className="goal--name">
				{props.type} {props.name}
			</span>
			<span className="goal--amount">
				$ {props.amount}
			</span>
		</div>
		<div className="goal__container--bottom">
			<span className="goal">
				Goal: ${ props.goalAmount }
			</span>
		</div>
	</div>
)

Goal.icons = {
	"Debt": <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		 <path d="M0 0h24v24H0z" fill="none"/>
		 <path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/>
 </svg>,
	"Saving":<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
	    <path d="M0 0h24v24H0z" fill="none"/>
	    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
	</svg>
}

export default Goal;
