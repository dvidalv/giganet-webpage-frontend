import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './appContext';

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
