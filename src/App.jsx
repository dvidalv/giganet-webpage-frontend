import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';
import Clientes from './components/Clientes/Clientes';
import Footer from './components/Footer/Footer';

// const getComprobantes = async () => {
// 	const response = await fetch('https://giganet-backend.vercel.app/api/v1/comprobantes');
// 	const data = await response.json();
// 	console.log(data);
// 	return data;
// };

// getComprobantes();

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Servicios />
			<Nosotros />
			<Clientes />
			<Footer />
		</>
	);
}

export default App;
