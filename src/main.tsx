import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '@/routes';

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
					<AppRoutes />
				</Suspense>
			</Router>
		</React.StrictMode>
	);
}

renderApp(rootElement);
