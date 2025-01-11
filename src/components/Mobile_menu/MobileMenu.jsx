import './Mobile_menu.css';
import { useContext } from 'react';
import { MobileContext } from '../../store/mobileContext';

function MobileMenu() {
	const { menuState, toggleSideMenu } = useContext(MobileContext);
	const isOpen = menuState.isSideMenuOpen;

	return (
		<div
			className={`menu_mobile_container ${isOpen ? 'open' : ''}`}
			onClick={toggleSideMenu}
		>
			<div className="menu_mobile_line menu_mobile_line_1"></div>
			<div className="menu_mobile_line menu_mobile_line_2"></div>
			<div className="menu_mobile_line menu_mobile_line_3"></div>
		</div>
	);
}

export default MobileMenu;
