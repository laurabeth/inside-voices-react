import React from 'react';
import Header from '../components/Header';
import Routes from '../routes/Routes';
import './Layout.css';

const Layout = () => {
	return (
		<div className="grid-container">
			<Header className="header-row" />
			<Routes className="layout-body" />
		</div>
	);
};

export default Layout;
