import imagen from '../../assets/images/hero.png';
import './Hero.css';
function Hero() {
	return (
		<main className="hero contenedor">
			<div className="contenido_hero">
				<h1>Desarrollamos Programas Personalizados</h1>
				<p>
					GigaNet es una empresa que se dedica a la creación de programas
					personalizados para empresas y particulares. Nuestro equipo de
					expertos en desarrollo de software está comprometido en ofrecerte
					soluciones innovadoras y eficientes para tus necesidades específicas.
				</p>
				<div className="button_hero">
					<button className="button">Contáctanos</button>
				</div>
			</div>
			<div className="imagen_hero">
				<img src={imagen} alt="imagen" />
			</div>
		</main>
	);
}

export default Hero;
