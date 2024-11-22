import './Header.css';
import logo from '../../assets/images/giganet_logo.png';
import MobileMenu from '../Mobile_menu/MobileMenu';
import { menuLinks } from '../../utils/constants';
import MenuLink from '../DropDown/MenuLink';
import DropDown from '../DropDown/DropDown';
function Header() {
	
	const handleScroll = (e, sectionId) => {
		e.preventDefault();
		const cleanId = sectionId.replace('/', '');
		const element = document.getElementById(cleanId);
		
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.warn(`Section with id "${cleanId}" not found`);
		}
	};
	const isActive = (path) => {
		if (path === '/') return location.pathname === '/';
		return location.pathname.startsWith(path); // true or false
	};

	return (
		<div className="header">
			<div className="contenido_header contenedor">
				<div className="imgen_header">
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

				<MobileMenu />
			</div>
		</div>
	);
}

export default Header;
