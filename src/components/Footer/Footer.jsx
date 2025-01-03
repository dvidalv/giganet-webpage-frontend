import './Footer.css';
import {
	IoLocationOutline,
	IoMailOutline,
	IoCallOutline,
} from 'react-icons/io5';

function Footer() {
	return (
		<footer className="footer">
			<div className="contenedor">
				<div className="footer_grid">
					<div className="footer_grid_item">
						<IoLocationOutline color="#fff" className='footer-icon' />
						<div className="footer_grid_item_content">
							<p>Dirección</p>
							<a
								href="https://maps.app.goo.gl/XwcVqy64qceAJigcA"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p>Calle 4 N. 16, Las Carolinas</p>
								<p>La Vega, República Dominicana</p>
							</a>
						</div>
					</div>

					<div className="footer_grid_item">
						<IoCallOutline color="#fff" className='footer-icon' />
						<div className="footer_grid_item_content">
							<p>Teléfono</p>
							<a href="tel:829-661-2747">829-661-2747</a>
							<a href="tel:682-560-2093">682-560-2093</a>
						</div>
					</div>

					<div className="footer_grid_item">
						<IoMailOutline color="#fff" className="footer-icon" />
						<div className="footer_grid_item_content">
							<p>Email</p>
							<a href="mailto:info@giganet-srl.com">info@giganet-srl.com</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
