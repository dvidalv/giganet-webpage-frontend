import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuLinks.css';

function MenuLink({
	color,
	onClick,
	to,
	text,
	children,
	isOpen,
	setOpenSubmenu,
	isActive,
}) {
	const onMouseLeave = () => {
		setOpenSubmenu(null);
	};

	return (
		<li className={`navbar__item ${isActive ? 'active' : ''}`}>
			<NavLink
				to={to}
				className={`navbar__link ${isActive ? 'active' : ''}`}
				style={{ color: color }}
				onClick={onClick}
			>
				{text}
			</NavLink>
			{children && isOpen && (
				<ul className="dropdown" onMouseLeave={onMouseLeave}>
					{children}
				</ul>
			)}
		</li>
	);
}

MenuLink.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func,
	to: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	isActive: PropTypes.bool,
	setOpenSubmenu: PropTypes.func,
};

export default MenuLink;
