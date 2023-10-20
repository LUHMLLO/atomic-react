import '@styles/icons.scss';
import '@styles/tailwind.scss';
import '@styles/main.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router.tsx';

const rootElement: HTMLElement | null = document.getElementById('root');

function renderApp(rootElement: HTMLElement | null) {
	if (!rootElement) {
		console.error("Root element 'root' not found in the HTML.");
		return;
	}

	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</React.StrictMode>
	);
}

renderApp(rootElement);

import.meta.env.VITE_APPNAME && (document.title = import.meta.env.VITE_APPNAME);
