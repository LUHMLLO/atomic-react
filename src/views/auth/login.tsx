import React, { ChangeEvent, useState } from 'react';

import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';
import Field from '@/components/molecules/field';
import Link from '@/components/molecules/link';
import Switchbox from '@/components/organisms/switchbox';
import ThemeToggle from '@/components/widgets/themetoggle';

interface LoginData {
	nombreUsuario: string;
	claveUsuario: string;
}

export default function Route() {
	// State to store the input values
	const [username, setUsername] = useState('js');
	const [password, setPassword] = useState('123456');

	// Function to handle form submission
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const apiUrl = 'http://ilotterypanel.com:3301/api/login';

		// Create a JSON object with the data
		const data: LoginData = {
			nombreUsuario: username,
			claveUsuario: password,
		};

		try {
			// Send a POST request to the API
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				// Handle successful login
				// You can redirect the user or perform any other action here
				console.log('Login successful');
			} else {
				// Handle failed login
				console.error('Login failed');
			}
		} catch (error) {
			// Handle network or other errors
			console.error('Error:', error);
		}
	};

	return (
		<div className='flex items-center w-screen h-screen'>
			<div className='grid place-center w-full h-full bg-zinc-800'>
				<Figure
					src='https://vuero.cssninja.io/assets/station-d05ed495.svg'
					className='h-[40rem] m-auto'
				/>
			</div>
			<form
				onSubmit={handleLogin}
				className='flex flex-col items-center justify-center flex-shrink-0 gap-5xl w-[34vw] h-full'>
				<nav className='flex items-center justify-between gap-5xs mx-auto w-[32rem]'>
					<Figure src='/favicon.svg' className='w-[4rem]' />
					<ThemeToggle />
				</nav>
				<div className='flex flex-col gap-nm mx-auto w-[32rem]'>
					<div>
						<Text tag='h1' text='Sign In' className='text-accent-600' />
						<Text tag='p' text='Welcome back to your account.' />
					</div>
					<div className='border-2 border-zinc-700 rounded-5xs overflow-hidden p-nm gap-nm'>
						<Field
							label='Email Address'
							leading_icon='email'
							borderless
							value={username}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setUsername(e.target.value)
							}
						/>
					</div>
					<div className='border-2 border-zinc-700 rounded-5xs overflow-hidden p-nm gap-nm'>
						<Field
							label='Password'
							leading_icon='lock'
							borderless
							value={password}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
						/>
					</div>
					<div className='flex items-center justify-between'>
						<Switchbox label='Remember Me' />
						<Link text='Forgot Password?' />
					</div>
				</div>
				<footer className='flex items-center justify-center gap-4xs mx-auto w-[32rem]'>
					<Button filled rounded text='Confirm' type='submit' /> Or{' '}
					<Link text='Create' alwaysHighlighted /> an account.
				</footer>
			</form>
		</div>
	);
}
