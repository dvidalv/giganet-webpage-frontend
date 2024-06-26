import logo from './assets/images/giganetLogo.png';
import './App.css';

function App() {
	return (
		<div className="w-full mx-auto outline outline-2 outline-red-500 h-screen flex justify-center items-center">
			<div className="logo-container flex flex-col items-center">
				<img src={logo} alt="logo" className='w-[100px] h-[100px] mb-4' />
				<h1 className='text-orange-500 text-4xl font-bold text-center mt-5 '>GigaNet muy pronto...</h1>
			</div>
		</div>
	);
}

export default App;
