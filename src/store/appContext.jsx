import { createContext } from 'react';

export const AppContext = createContext({
	isSideMenuOpen: false,
	toggleSideMenu: () => {},
	token: null,
	setToken: () => {},
	removeToken: () => {},
});
