import { useState } from 'react';
import { menuLinks } from '../../utils/constants';
import PropTypes from 'prop-types';
import './SideMenu.css';

function SideMenu({ isOpen, onClose }) {
	console.log(isOpen);

	return (
		<div className={`side-menu ${isOpen ? 'open' : ''}`}>
			<div className="side-menu-content">
				<button className="close-button" onClick={onClose}>
					{/* Icono de cerrar */}
				</button>
				<nav>
					<ul>
						{menuLinks.map((link) => (
							<li key={link.to}>
								{/* Contenido del menú */}
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
