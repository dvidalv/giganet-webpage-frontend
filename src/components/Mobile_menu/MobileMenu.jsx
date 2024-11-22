import './Mobile_menu.css';
import { useState } from 'react';
function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	// console.log(isOpen);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}

	return (
			<div className={`menu_mobile_container ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
			<div className="menu_mobile_line menu_mobile_line_1"></div>
			<div className="menu_mobile_line menu_mobile_line_2"></div>
			<div className="menu_mobile_line menu_mobile_line_3"></div>
		</div>
	)
}

export default MobileMenu
