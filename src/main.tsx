import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '@/views/auth/login';

import Dashboard from '@/views/app/dashboard';

import Atoms from '@/views/lab/atoms';
import Molecules from '@/views/lab/molecules';
import Organisms from '@/views/lab/organisms';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/auth/login' element={<Login />} />
					<Route path='/app/dashboard' element={<Dashboard />} />
					<Route path='/lab/atoms' element={<Atoms />} />
					<Route path='/lab/molecules' element={<Molecules />} />
					<Route path='/lab/organisms' element={<Organisms />} />
				</Routes>
			</Suspense>
		</Router>
	</React.StrictMode>
);
