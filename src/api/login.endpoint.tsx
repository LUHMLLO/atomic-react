import axios from 'axios';
import { LoginData, User } from './interfaces';
import { setUser } from './stores';

export async function Endpoint_Login(
	data: LoginData,
	navigate: (path: string) => void
) {
	try {
		const response = await axios.post(
			import.meta.env.VITE_ENDPOINT_LOGIN,
			data,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.status === 201) {
			const user: User = await response.data;
			setUser(user);
			navigate('/dashboard');
		} else {
			console.error('Login failed');
		}
	} catch (error) {
		console.error('Error:', error);
	}
}
