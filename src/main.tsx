import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Index from './views/app/index';
import Dashboard from './views/app/dashboard';
import Login from './views/auth/login';
import Inspect_Atoms from './views/inspect/atoms';
import Inspect_Molecules from './views/inspect/molecules';
import Inspect_Organisms from './views/inspect/organisms';
import Inspect_Widgets from './views/inspect/widgets';

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
						<Route path='/inspect/atoms' element={<Inspect_Atoms />} />
						<Route path='/inspect/molecules' element={<Inspect_Molecules />} />
						<Route path='/inspect/organisms' element={<Inspect_Organisms />} />
						<Route path='/inspect/widgets' element={<Inspect_Widgets />} />
					</Routes>
				</Suspense>
			</Router>
		</React.StrictMode>
	);
}

renderApp(rootElement);
