import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
	<div className="header__block">
		<div className="header__block--title">
			{props.bigText}
		</div>
		<div className="header__block--subtext">
			{props.subText}
		</div>
	</div>
)

Header.PropTypes = {
	bigText: PropTypes.string.isRequired,
	subText: PropTypes.string.isRequired
}

export default Header;
