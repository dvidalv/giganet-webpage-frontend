import { useNavigate, useLocation } from 'react-router-dom';
import { menuLinks } from '../../utils/constants';

import PropTypes from 'prop-types';

import './SideMenu.css';
function SideMenu({ isOpen, onClose }) {
	const navigate = useNavigate();
	const location = useLocation();
	const handleScroll = (e, sectionId) => {
		e.preventDefault();

		if (sectionId === 'contact') {
			navigate('/contact');
			return;
		}

		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
			return;
		}

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.warn(`Section with id "${sectionId}" not found`);
		}
	};

	return (
		<div className={`side-menu ${isOpen ? 'open' : ''}`}>
			<div className="side-menu-content">
				<nav>
					<ul
						className="side-menu-list"
						onMouseLeave={() => {
							if (isOpen) {
								onClose(false);
							}
						}}
					>
						{menuLinks.map((link) => (
							<li
								key={link.to}
								className="side-menu-item"
								onClick={(e) => handleScroll(e, link.to)}
							>
								{link.text}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}

SideMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default SideMenu;
