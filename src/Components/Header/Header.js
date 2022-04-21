import React from "react";
import "./Header.scss";
const Header = () => {
	return (
		<div className='header'>
			<img className='arrow' src='./assets/back_arrow_icon.svg' alt='' />
			<img src='./assets/icon.svg' alt='' />
			<h1>Richie's Homes</h1>
		</div>
	);
};

export default Header;
