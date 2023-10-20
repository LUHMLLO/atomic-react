import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { $profile, GetProfile } from '@/api/profile.ts';
import { $token } from '@/api/token.ts';

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
				navigate('/auth/login');
			} else if (!profileData) {
				GetProfile();
			} else if (['/', '/login', '/auth/login'].includes(location.pathname)) {
				navigate('/dashboard');
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
		return null;
	}

	return <>{children}</>;
}
