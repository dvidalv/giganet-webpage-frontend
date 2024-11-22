import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import { MobileContext } from './store/mobileContext';
import { useContext } from 'react';

function App() {
	const { menuState } = useContext(MobileContext);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<SideMenu isOpen={menuState.isSideMenuOpen} />
		</>
	);
}

export default App;
