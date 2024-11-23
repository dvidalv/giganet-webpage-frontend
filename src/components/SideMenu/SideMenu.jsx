import { menuLinks } from '../../utils/constants';
import PropTypes from 'prop-types';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';
function SideMenu({ isOpen }) {
	const navigate = useNavigate();
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
	const isActive = (path) => {
		if (path === '/') return location.pathname === '/';
		return location.pathname.startsWith(path); // true or false
	};

	console.log(menuLinks);
	return (
		<div className={`side-menu ${isOpen ? 'open' : ''}`}>
			<div className="side-menu-content">
				<nav>
					<ul className='side-menu-list'>
						{menuLinks.map((link) => (
							<li key={link.to} className='side-menu-item' onClick={(e) => handleScroll(e, link.to)}>
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
