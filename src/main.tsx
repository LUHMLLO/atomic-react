import '@styles/icons.scss';
import '@styles/tailwind.scss';
import '@styles/main.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '@/router.tsx';
import { HashRouter as Router } from 'react-router-dom';

const rootElement: HTMLElement | null = document.getElementById('root');

function renderApp(rootElement: HTMLElement | null) {
	if (!rootElement) {
		console.error("Root element 'root' not found in the HTML.");
		return;
	}

	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Router basename='/'>
				<Suspense fallback={<div>Loading...</div>}>
					<AppRoutes />
				</Suspense>
			</Router>
		</React.StrictMode>
	);
}

renderApp(rootElement);

import.meta.env.VITE_APPNAME && (document.title = import.meta.env.VITE_APPNAME);
