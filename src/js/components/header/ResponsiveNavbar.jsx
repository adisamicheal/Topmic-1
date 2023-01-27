import React from 'react';
import { arrayOf, func, object, string } from 'prop-types';

import ResponsiveNavSubMenu from './ResponsiveNavSubMenu';

const ResponsiveNavbar = props => {
	// console.log(props.data[1].dataNavbar); ##########
	const { data, newClass, myFunc } = props;
	const responsiveDataArrayNavbar = [...data[1].dataNavbar];
	const responsiveNavSubMenu = responsiveDataArrayNavbar
		.reverse()
		.map(item => {
			if (item.dropDownMenu.length > 1) {
				return (
					<ResponsiveNavSubMenu
						key={item.id}
						onclick={() => {
							return 0;
						}}
						data={item}
						data2={item.dropDownMenu}
						myFunc={myFunc}
					/>
				);
			}
			return (
				<ResponsiveNavSubMenu
					key={item.id}
					onclick={myFunc}
					data={item}
					data2={item.dropDownMenu}
					myFunc={myFunc}
				/>
			);
		});
	// console.log(newClass);
	return (
		<div className={`responsive-nav-sub-menu-header ${newClass}`}>
			<div className="responsive-nav-sub-menu-header-navbar-menus">
				{responsiveNavSubMenu}
			</div>
			<div
				className="responsive-nav-sub-menu-header-login"
				onClick={myFunc}
				onKeyPress={myFunc}
				role="link"
				tabIndex="0"
			/>
		</div>
	);
};

ResponsiveNavbar.propTypes = {
	newClass: string.isRequired,
	data: arrayOf(object.isRequired).isRequired,
	myFunc: func.isRequired
};
export default ResponsiveNavbar;
