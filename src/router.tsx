import { createBrowserRouter } from 'react-router-dom';

import AuthLogin from '@routes/auth/login.tsx';
import AuthSignup from '@routes/auth/signup.tsx';
import Dashboard from '@routes/app/dashboard.tsx';
import Profile from '@routes/app/profile.tsx';
import Settings from '@routes/app/settings.tsx';
import InspectAtoms from '@routes/inspect/atoms.tsx';
import InspectMolecules from '@routes/inspect/molecules.tsx';
import InspectOrganisms from '@routes/inspect/organisms.tsx';
import InspectWidgets from '@routes/inspect/widgets.tsx';
import Error500 from '@routes/500.tsx';
import Error404 from '@routes/404.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLogin />,
	},
	{
		path: '/login',
		element: <AuthLogin />,
	},
	{
		path: '/signup',
		element: <AuthSignup />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/settings',
		element: <Settings />,
	},
	{
		path: '/inspect/atoms',
		element: <InspectAtoms />,
	},
	{
		path: '/inspect/molecules',
		element: <InspectMolecules />,
	},
	{
		path: '/inspect/organisms',
		element: <InspectOrganisms />,
	},
	{
		path: '/inspect/widgets',
		element: <InspectWidgets />,
	},
	{
		path: '/500',
		element: <Error500 />,
	},
	{
		path: '*',
		element: <Error404 />,
	},
]);

export default router;
