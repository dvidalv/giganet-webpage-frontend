import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuLinkMobile.css';
import { IoIosArrowUp } from 'react-icons/io';

function MenuLinkMobile({ to, text, isSubmenu, children, onClick }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e) => {
		if (isSubmenu) {
			e.preventDefault();
			setIsOpen(!isOpen);
		}
		if (onClick) {
			onClick();
		}
	};

	return (
		<div className="menu-link-mobile">
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<Link to={to} onClick={handleClick}>
					{text}
				</Link>
				{isSubmenu && (
					<IoIosArrowUp className={isOpen ? 'arrow-icon open' : 'arrow-icon'} />
				)}
			</div>
			{isOpen && children}
		</div>
	);
}

MenuLinkMobile.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isSubmenu: PropTypes.bool.isRequired,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default MenuLinkMobile;
