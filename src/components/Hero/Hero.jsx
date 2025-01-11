import imagen from '../../assets/images/hero.png';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
	const navigate = useNavigate();

	const handleContactClick = (e) => {
		e.preventDefault();
		navigate('/contact');
		window.scrollTo(0, 0);
	};

	return (
		<main className="hero contenedor" id="hero">
			<div className="contenido_hero">
				<h1>Desarrollamos Soluciones Tecnológicas a tu Medida</h1>
				<p>
					En GigaNet nos especializamos en el desarrollo de software
					personalizado para empresas y particulares. Nuestro equipo de expertos
					está comprometido con la excelencia, ofreciendo soluciones innovadoras
					y eficientes que se adaptan perfectamente a tus necesidades
					específicas.
				</p>
				<div className="button_hero">
					<button className="button" onClick={handleContactClick}>
						Solicita una Consulta
					</button>
				</div>
			</div>
			<div className="imagen_hero">
				<img src={imagen} alt="imagen" />
			</div>
		</main>
	);
}

export default Hero;
