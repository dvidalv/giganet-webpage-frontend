import './Servicios.css';
import nube from '../../assets/images/nube.png';
import file from '../../assets/images/file.png';
import app from '../../assets/images/app.png';
import { useState } from 'react';

function Servicios() {
	const [serviciosFlipped, setServiciosFlipped] = useState([false, false, false]);

	const toggleFlip = (index) => {
		setServiciosFlipped(prev => {
			const newState = [...prev];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<section className="servicios" id="servicios">
			<div className="contenedor contenedor_servicios">
				<h2>Nuestros Servicios</h2>
				<div className="servicios_grid">
					<div className={`servicio ${serviciosFlipped[0] ? 'flipped' : ''}`} onClick={() => toggleFlip(0)}>
						<div className="servicio-inner">
							<div className="servicio-front">
								<img src={nube} alt="imagen" />
								<h3>Nube</h3>
								<p>
									Potencie el crecimiento de su negocio mediante servicios y
									aplicaciones en la nube estratégicamente diseñados, respaldados
									por una infraestructura escalable y rentable.
								</p>
							</div>
							<div className="servicio-back">
								<h3>Servicios en la Nube</h3>
								<div className="descripcion-detallada">
									<p>Nuestros servicios en la nube incluyen:</p>
									<ul>
										<li>Migración a la nube</li>
										<li>Optimización de costos</li>
										<li>Seguridad y cumplimiento</li>
										<li>Arquitectura cloud-native</li>
										<li>Soporte 24/7</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className={`servicio ${serviciosFlipped[1] ? 'flipped' : ''}`} onClick={() => toggleFlip(1)}>
						<div className="servicio-inner">
							<div className="servicio-front">
								<img src={file} alt="imagen" />
								<h3>FileMaker</h3>
								<p>
									FileMaker es una plataforma de desarrollo de bases de datos relacionales que permite crear aplicaciones personalizadas para la gestión de datos.
								</p>
							</div>
							<div className="servicio-back">
								<h3>Servicios de FileMaker</h3>
								<div className="descripcion-detallada">
									<p>Nuestros servicios de FileMaker incluyen:</p>
									<ul>
										<li>Creación de bases de datos</li>
										<li>Desarrollo de aplicaciones personalizadas</li>
										<li>Consultoría y asesoría</li>
										<li>Migración de datos</li>
										<li>Optimización de rendimiento</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className={`servicio ${serviciosFlipped[2] ? 'flipped' : ''}`} onClick={() => toggleFlip(2)}>
						<div className="servicio-inner">
							<div className="servicio-front">
								<img src={app} alt="imagen" />
								<h3>Aplicaciones Web</h3>
								<p>Dale vida a tu negocio con aplicaciones web personalizadas que mejoran la eficiencia y la experiencia del usuario.</p>
							</div>
							<div className="servicio-back">
								<h3>Servicios de Desarrollo Web</h3>
								<div className="descripcion-detallada">
									<p>Nuestros servicios de desarrollo web incluyen:</p>
									<ul>
										<li>Desarrollo de aplicaciones web personalizadas</li>
										<li>Integración de APIs</li>
										<li>Mantenimiento y soporte</li>
										<li>Optimización para SEO</li>
										<li>Desarrollo de aplicaciones móviles</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Servicios