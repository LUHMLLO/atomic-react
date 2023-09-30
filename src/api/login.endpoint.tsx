import axios from 'axios';
import { LoginData, User } from './interfaces';
import { setUser } from './stores';

export async function Endpoint_Login(data: LoginData) {
	try {
		const response = await axios.post(
			'http://ilotterypanel.com:3301/api/login',
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

			console.log('Login successful', response.data);
		} else {
			console.error('Login failed');
		}
	} catch (error) {
		console.error('Error:', error);
	}
}
