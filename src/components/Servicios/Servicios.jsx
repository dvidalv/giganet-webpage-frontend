import './Servicios.css';
import nube from '../../assets/images/nube.png';
import file from '../../assets/images/file.png';
import app from '../../assets/images/app.png';

function Servicios() {
	return (
		<section className="servicios">
			<div className="contenedor contenedor_servicios">
				<h2>Nuestros Servicios</h2>
				<div className="servicios_grid">
					<div className="servicio">
							<img src={nube} alt="imagen" />
							<h3>Nube</h3>
							<p>Potencie el crecimiento de su negocio mediante servicios y aplicaciones en la nube estratégicamente diseñados, respaldados por una infraestructura escalable y rentable.</p>
					</div>
					<div className="servicio">
						<img src={file} alt="imagen" />
						<h3>FileMaker</h3>
						<p>Potencie el crecimiento de su negocio mediante servicios y aplicaciones en la nube estratégicamente diseñados, respaldados por una infraestructura escalable y rentable.</p>
					</div>
					<div className="servicio">
						<img src={app} alt="imagen" />
						<h3>Aplicaciones Personalizadas</h3>
						<p>Despliegue aplicaciones empresariales personalizadas e intégralas sin problemas en su ecosistema tecnológico.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Servicios