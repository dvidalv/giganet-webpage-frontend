import {
	Form,
	NavLink,
	useLocation,
	useNavigate,
	useRouteLoaderData,
} from 'react-router-dom';
import { useEffect } from 'react';

import MobileMenu from '../Mobile_menu/MobileMenu';

import './Header.css';
import logo from '../../assets/images/giganet_logo.png';
import { getAuthToken } from '../../utils/auth';

function Header() {
	const location = useLocation();
	const navigate = useNavigate();
	const token = useRouteLoaderData('root') || null;


	useEffect(() => {
		if (location.pathname === '/contact' || location.pathname === '/auth') {
			window.scrollTo(0, 0);
		}
	}, [location.pathname]);

	const handleScroll = (elementId) => {
		// Si no estamos en la página principal, primero navegamos a ella
		if (location.pathname !== '/') {
			navigate('/');
			// Esperamos un momento para que los componentes se monten
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
			// Si ya estamos en la página principal, solo hacemos scroll
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
	};

	return (
		<div className="header">
			<div className="contenido_header contenedor">
				<div
					className="imagen_header"
					onClick={() => {
						navigate('/');
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					<img src={logo} alt="logo" className="w-[170px] mb-4" />
				</div>

				<div className="nav_header">
					<ul>
						<li>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									handleScroll('hero');
								}}
							>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									handleScroll('servicios');
								}}
							>
								Servicios
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									handleScroll('nosotros');
								}}
							>
								Nosotros
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									handleScroll('clientes');
								}}
							>
								Clientes
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contacto</NavLink>
						</li>
						{!token && (
							<li>
								<NavLink to="/auth?mode=login" id="auth">
									Login
								</NavLink>
							</li>
						)}
						{token && (
							<li>
								<Form method="post" action="/logout">
									<button>Logout</button>
								</Form>
							</li>
						)}
					</ul>
				</div>
				<MobileMenu />
			</div>
		</div>
	);
}

export default Header;
