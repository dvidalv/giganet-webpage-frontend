import './Mobile_menu.css';
import PropTypes from 'prop-types';

function MobileMenu({ isOpen, setIsOpen }) {
	// const [isOpen, setIsOpen] = useState(false);

	// console.log(isOpen);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div
			className={`menu_mobile_container ${isOpen ? 'open' : ''}`}
			onClick={toggleMenu}
		>
			<div className="menu_mobile_line menu_mobile_line_1"></div>
			<div className="menu_mobile_line menu_mobile_line_2"></div>
			<div className="menu_mobile_line menu_mobile_line_3"></div>
		</div>
	);
}

MobileMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
