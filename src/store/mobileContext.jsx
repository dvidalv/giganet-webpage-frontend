import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const MobileContext = createContext({
	isSideMenuOpen: false,
	toggleSideMenu: () => {},
});

function reducer(state, action) {
	switch (action.type) {
		case 'toggleSideMenu':
			return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
		default:
			return state;
	}
}

export const MobileContextProvider = ({ children }) => {
	const [menuState, dispatch] = useReducer(reducer, { isSideMenuOpen: false });

	const toggleSideMenu = () => {
		dispatch({ type: 'toggleSideMenu' });
	};

	const value = { menuState, toggleSideMenu };

	return <MobileContext.Provider value={value}>{children}</MobileContext.Provider>;
};

MobileContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
