import { useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MobileContext } from '../../store/mobileContext';
import './SideMenu.css';

function SideMenu() {
	const navigate = useNavigate();
	const location = useLocation();
	const { menuState, toggleSideMenu } = useContext(MobileContext);
	const isOpen = menuState.isSideMenuOpen;
	const [activeSection, setActiveSection] = useState('hero');

	const handleScrollTo = (elementId) => {
		if (elementId === 'contact') {
			navigate('/contact');
			setActiveSection('contact');
			toggleSideMenu();
			return;
		}

		if (elementId === 'login') {
			navigate('/login');
			setActiveSection('login');
			toggleSideMenu();
			return;
		}

		setActiveSection(elementId);

		// Si no estamos en la página principal, primero navegamos a ella
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				const element = document.getElementById(elementId);
				if (element) {
					const headerHeight = 100;
					const elementPosition = element.getBoundingClientRect().top;
					const offsetPosition =
						elementPosition + window.scrollY - headerHeight;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth',
					});
				}
			}, 100);
		} else {
			const element = document.getElementById(elementId);
			if (element) {
				const headerHeight = 100;
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.scrollY - headerHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				});
			}
		}
		toggleSideMenu();
	};

	return (
		<div className={`side-menu ${isOpen ? 'open' : ''}`}>
			<div className="side-menu-content">
				<nav>
					<ul className="side-menu-list">
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('hero');
								}}
								className={activeSection === 'hero' ? 'active' : ''}
							>
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('servicios');
								}}
								className={activeSection === 'servicios' ? 'active' : ''}
							>
								Servicios
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('nosotros');
								}}
								className={activeSection === 'nosotros' ? 'active' : ''}
							>
								Nosotros
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('clientes');
								}}
								className={activeSection === 'clientes' ? 'active' : ''}
							>
								Clientes
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('contact');
								}}
								className={activeSection === 'contact' ? 'active' : ''}
							>
								Contacto
							</a>
						</li>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleScrollTo('login');
								}}
								className={activeSection === 'login' ? 'active' : ''}
							>
								Login
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideMenu;
