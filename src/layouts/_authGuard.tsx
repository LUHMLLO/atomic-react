import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { $profile, GetProfile } from '@api/profile.ts';
import { $token } from '@api/token.ts';

interface Props {
	children?: JSX.Element | JSX.Element[];
	secured?: boolean;
}

export default function Guard({ children, secured = true }: Props) {
	const tokenData = useStore($token);
	const profileData = useStore($profile);
	const navigate = useNavigate();
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleRedirect = () => {
			if (!tokenData) {
				return navigate('/login');
			}

			if (!profileData) {
				GetProfile();
			}

			if (profileData && ['/', '/login'].includes(location.pathname)) {
				return navigate('/dashboard');
			}

			setLoading(false);
		};
		if (secured) {
			handleRedirect();
		} else {
			GetProfile();
			setLoading(false);
		}
	}, [tokenData, profileData, location.pathname, navigate, secured]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
}
