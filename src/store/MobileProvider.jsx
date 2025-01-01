import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { MobileContext } from './mobileContext';

function reducer(state, action) {
	switch (action.type) {
		case 'toggleSideMenu':
			return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
		default:
			return state;
	}
}

export function MobileProvider({ children }) {
	const [menuState, dispatch] = useReducer(reducer, { isSideMenuOpen: false });

	const toggleSideMenu = () => {
		dispatch({ type: 'toggleSideMenu' });
	};

	return (
		<MobileContext.Provider value={{ menuState, toggleSideMenu }}>
			{children}
		</MobileContext.Provider>
	);
}

MobileProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
