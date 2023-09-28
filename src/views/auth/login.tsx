import Layout from '@/layouts/auth';
import React, { ChangeEvent, useState } from 'react';

import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';
import Field from '@/components/molecules/field';
import Link from '@/components/molecules/link';
import Switchbox from '@/components/organisms/switchbox';
import ThemeToggle from '@/components/widgets/themetoggle';
import axios from 'axios';

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
			// Send a POST request to the API using Axios
			const response = await axios.post(apiUrl, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200) {
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
		<Layout>
			<form
				onSubmit={handleLogin}
				className='relative flex flex-col align-center justify-center flex-grow flex-shrink-0 gap-5xl w-full max-w-[88%] mx-auto'>
				<nav className='flex items-center justify-between gap-5xs '>
					<Figure src='/favicon.svg' className='w-[4rem]' />
					<ThemeToggle />
				</nav>
				<fieldset className='relative flex flex-col gap-nm overflow-hidden flex-shrink max-w-full'>
					<header>
						<Text tag='h1' text='Sign In' className='text-accent-600' />
						<Text tag='p' text='Welcome back to your account.' />
					</header>
					<Field
						label='Email Address'
						leading_icon='email'
						value={username}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
					/>
					<Field
						label='Password'
						leading_icon='lock'
						value={password}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<div className='flex flex-wrap items-center justify-between overflow-hidden w-full'>
						<Switchbox
							label='Remember Me'
							className='whitespace-nowrap flex-shrink-0 flex-grow'
						/>
						<Link
							text='Forgot Password?'
							className='whitespace-nowrap flex-shrink-0 flex-grow'
						/>
					</div>
				</fieldset>
				<footer className='flex items-center gap-4xs'>
					<Button
						filled
						active
						text='Confirm'
						type='submit'
						className='rounded-5xl'
					/>{' '}
					Or <Link text='Create' alwaysHighlighted /> an account.
				</footer>
			</form>
		</Layout>
	);
}
