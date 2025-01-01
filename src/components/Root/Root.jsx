import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideMenu from '../SideMenu/SideMenu';
import { MobileContext } from '../../store/mobileContext';
import { useContext } from 'react';
	
function Root() {
	const { menuState, toggleSideMenu } = useContext(MobileContext);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<SideMenu isOpen={menuState.isSideMenuOpen} onClose={toggleSideMenu} />
		</>
	)
}

export default Root
