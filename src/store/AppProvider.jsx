import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export function AppProvider({ children }) {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const value = {
		isSideMenuOpen,
		setIsSideMenuOpen,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
}
