import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Index from './views/app/index';
import Dashboard from './views/app/dashboard';
import Login from './views/auth/login';
import Atoms from './views/inspect/atoms';
import Molecules from './views/inspect/molecules';
import Organisms from './views/inspect/organisms';

const rootElement: HTMLElement | null = document.getElementById('root');

function renderApp(rootElement: HTMLElement | null) {
	if (!rootElement) {
		console.error("Root element 'root' not found in the HTML.");
		return;
	}

	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/' element={<Index />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/inspect/atoms' element={<Atoms />} />
						<Route path='/inspect/molecules' element={<Molecules />} />
						<Route path='/inspect/organisms' element={<Organisms />} />
					</Routes>
				</Suspense>
			</Router>
		</React.StrictMode>
	);
}

renderApp(rootElement);
