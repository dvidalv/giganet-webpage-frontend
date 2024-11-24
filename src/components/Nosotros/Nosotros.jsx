import './Nosotros.css';
function Nosotros() {
	return (
		<section className="contenedor" id="nosotros">
			<div className="nosotros">
				<h2>Sobre Nosotros</h2>
				<div className="grid_contenido">
					<div className="imagen_nosotros"></div>
					<div className="texto_nosotros">
						<p>
							En GigaNet, estamos convencidos de que las empresas logran el
							éxito al utilizar la tecnología como una ventaja estratégica. Como
							desarrolladores de software a medida, ayudamos a eliminar las
							limitaciones de los sistemas antiguos, brindando a nuestros
							clientes el poder de aprovechar nuevas oportunidades con
							soluciones tecnológicas avanzadas. Creemos que la tecnología debe
							ser un recurso valioso, no una carga. Diseñamos soluciones
							personalizadas que se ajustan a las necesidades particulares de
							cada negocio, optimizando los procesos y flujos de trabajo únicos
							de cada cliente. Nuestro equipo de técnicos expertos trabaja de
							manera consultiva, aprovechando su conocimiento colectivo para
							comprender a fondo su negocio y crear soluciones innovadoras que
							respondan a sus requerimientos específicos.
						</p>
						<div className="button_nosotros">
							<button className="button" onClick={() => window.location.href='contact'}>Contáctanos</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Nosotros;
