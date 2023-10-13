import { Route, Routes } from 'react-router-dom';

import Login from '@/routes/auth/login';
import Signup from '@/routes/auth/signup';
import Dashboard from '@/routes/app/dashboard';
import Profile from '@/routes/app/profile';
import Settings from '@/routes/app/settings';

import Inspect_Atoms from '@/routes/inspect/atoms';
import Inspect_Molecules from '@/routes/inspect/molecules';
import Inspect_Organisms from '@/routes/inspect/organisms';
import Inspect_Widgets from '@/routes/inspect/widgets';

import Error_404 from '@/routes/404';
import Error_500 from '@/routes/500';

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
