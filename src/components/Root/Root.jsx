import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideMenu from '../SideMenu/SideMenu';
import { MobileContext } from '../../store/mobileContext';
import { useContext, useEffect } from 'react';
import { useSubmit } from 'react-router-dom';
import { getTokenExpirationDate } from '../../utils/auth';

function Root() {
	const token = useLoaderData();
	const submit = useSubmit();
	const expirationDate = getTokenExpirationDate();

	useEffect(() => {
		if (!token) {
			return;
		}
		if (token === 'expired') {
			submit(null, { action: '/logout' });
		}

		setTimeout(() => {
			submit(null, { action: '/logout' });
		}, expirationDate);
	}, [token, submit]);

	const { menuState, toggleSideMenu } = useContext(MobileContext);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<SideMenu isOpen={menuState.isSideMenuOpen} onClose={toggleSideMenu} />
		</>
	);
}

export default Root;
