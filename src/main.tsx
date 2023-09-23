import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '@/views/auth/login';
import Dashboard from '@/views/app/dashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/auth/login' element={<Login />} />
					<Route path='/app/dashboard' element={<Dashboard />} />
				</Routes>
			</Suspense>
		</Router>
	</React.StrictMode>
);
