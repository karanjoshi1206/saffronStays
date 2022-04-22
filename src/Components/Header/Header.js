import React from "react";
import "./Header.scss";
const Header = () => {
	return (
		<div className='header'>
			<div className='header-content'>
				<img className='arrow' src='./assets/back_arrow_icon.svg' alt='' />
				<img src='./assets/icon.svg' alt='' />
				<h1>Richie's Homes</h1>
			</div>
		</div>
	);
};

export default Header;
