import './Clientes.css';
import agrecon from '../../assets/images/agrecon-logo.png';
import lpcr from '../../assets/images/lpcr-logo.png';
import sgi from '../../assets/images/sgi-logo.png';
import biopap from '../../assets/images/biopap-logo.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
function Clientes() {
	return (
		<section className="contenedor" id="clientes">
			<div className="clientes">
				<h2>Nuestros Clientes</h2>
				<div className="clientes_grid">
					<div className="cliente">
						<img
							src={lpcr}
							alt="logo Laboratorio de patologia contreras robledo"
						/>
						<h3>Laboratorio de patologia contreras robledo</h3>
						<p>
							<strong>Giganet</strong> desarrolló desde cero una aplicación integral para la
							facturación, gestión de las ARS y generación de reportes de
							estudios, adaptada a las necesidades de todo el laboratorio.
						</p>
						<p className="flex items-center gap-2 ">
							<a href="https://www.contrerasrobledo.com" target="_blank">
								<strong>Visitar</strong>
							</a>

							<span>
								<BsArrowRightCircleFill color="#FF6600" />
							</span>
						</p>
					</div>
					<div className="cliente">
						<img
							src={agrecon}
							alt="logo Agrecon"
						/>
						<h3>Agrecon</h3>
						<p>
							Agrecon es una empresa que se dedica a la venta de cementos para la
							construcción en <strong>Giganet</strong> le desarrollamos un sistema
							hecho a la medida para el manejo de la venta y el transporte del
							cemento.
						</p>
						<p className="flex items-center gap-2 ">
							<a href="#" target="_blank">
								<strong>Visitar</strong>
							</a>

							<span>
								<BsArrowRightCircleFill color="#FF6600" />
							</span>
						</p>
					</div>

					<div className="cliente">
						<img
							src={sgi}
							alt="logo SGI"
						/>
						<h3>SokaGakai Internacional RD</h3>
						<p>
							<strong>Giganet</strong> desarrolló desde cero la aplicación para el manejo de todos los miembros de la organización.
						</p>
						<p className="flex items-center gap-2 ">
							<a href="#" target="_blank">
								<strong>Visitar</strong>
							</a>

							<span>
								<BsArrowRightCircleFill color="#FF6600" />
							</span>
						</p>
					</div>

					<div className="cliente">
						<img
							src={biopap}
							alt="logo Biopap"
						/>
						<h3>BioPap</h3>
						<p>
							<strong>Giganet</strong> desarrolló desde cero una aplicación integral
							para la facturación, gestión de las ARS y generación de reportes de
							estudios, adaptada a las necesidades de todo el laboratorio.
						</p>
						<p className="flex items-center gap-2 ">
							<a href="#" target="_blank">
								<strong>Visitar</strong>
							</a>

							<span>
								<BsArrowRightCircleFill color="#FF6600" />
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Clientes;
