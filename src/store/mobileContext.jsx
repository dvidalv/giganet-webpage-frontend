import { createContext } from 'react';

export const MobileContext = createContext({
	isSideMenuOpen: false,
	toggleSideMenu: () => {},
});
