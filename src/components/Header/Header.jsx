import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MobileMenu from '../Mobile_menu/MobileMenu';
import MenuLink from '../DropDown/MenuLink';
import DropDown from '../DropDown/DropDown';

import { MobileContext } from '../../store/mobileContext';
import { menuLinks } from '../../utils/constants';

import './Header.css';
import logo from '../../assets/images/giganet_logo.png';

function Header() {
	const navigate = useNavigate();
	const { menuState, toggleSideMenu } = useContext(MobileContext);


	
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

	return (
		<div className="header">
			<div className="contenido_header contenedor">
				<div className="imagen_header" onClick={(e) => handleScroll(e, 'hero')}>
					<img src={logo} alt="logo" className="w-[170px] mb-4" />
				</div>

				<div className="nav_header">
					<ul>
						{menuLinks.map((link) => (
							<MenuLink
								key={link.to}
								{...link}
								isActive={isActive(link.to)}
								onClick={(e) => handleScroll(e, link.to)}
							>
								{link.submenu &&
									link.submenuItems.map((subItem) => (
										<DropDown
											key={subItem.to}
											to={subItem.to}
											text={subItem.text}
										/>
									))}
							</MenuLink>
						))}
					</ul>
				</div>

				<MobileMenu isOpen={menuState.isSideMenuOpen} setIsOpen={toggleSideMenu} />
			</div>
		</div>
	);
}



export default Header;
