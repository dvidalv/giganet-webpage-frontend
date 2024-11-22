import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import { useState } from 'react';


function App() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	return (
		<>
			<Header isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
			<Outlet />
			<Footer />
			<SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
		</>
	);
}

export default App;
