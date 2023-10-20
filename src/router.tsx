import { Route, Routes } from 'react-router-dom';

import Login from '@/routes/auth/login.tsx';
import Signup from '@/routes/auth/signup.tsx';

import Dashboard from '@/routes/app/dashboard.tsx';
import Profile from '@/routes/app/profile.tsx';
import Settings from '@/routes/app/settings.tsx';

import Inspect_Atoms from '@/routes/inspect/atoms.tsx';
import Inspect_Molecules from '@/routes/inspect/molecules.tsx';
import Inspect_Organisms from '@/routes/inspect/organisms.tsx';
import Inspect_Widgets from '@/routes/inspect/widgets.tsx';

import Error_404 from '@/routes/404.tsx';
import Error_500 from '@/routes/500.tsx';

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Login />} />
		<Route path='/login' element={<Login />} />
		<Route path='/auth/login' element={<Login />} />

		<Route path='/signup' element={<Signup />} />
		<Route path='/auth/signup' element={<Signup />} />

		<Route path='/dashboard' element={<Dashboard />} />

		<Route path='/profile' element={<Profile />} />
		<Route path='/settings' element={<Settings />} />

		<Route path='/inspect/atoms' element={<Inspect_Atoms />} />
		<Route path='/inspect/molecules' element={<Inspect_Molecules />} />
		<Route path='/inspect/organisms' element={<Inspect_Organisms />} />
		<Route path='/inspect/widgets' element={<Inspect_Widgets />} />

		<Route path='*' element={<Error_404 />} />
		<Route path='/500' element={<Error_500 />} />
	</Routes>
);

export default AppRoutes;
