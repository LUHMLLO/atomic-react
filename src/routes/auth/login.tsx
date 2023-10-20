import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GetToken } from '@api/token.ts';

import Layout from '@layouts/auth.tsx';
import Figure from '@components/atoms/figure.tsx';
import Button from '@components/molecules/button.tsx';
import Field from '@components/molecules/field.tsx';
import ThemeToggle from '@components/widgets/themetoggle.tsx';
import { LoginDTO } from '@interfaces/dtos.ts';

export default function Route() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: LoginDTO = {
			username: username,
			password: password.trim(),
		};

		await GetToken(data, navigate);
	};

	return (
		<Layout>
			<form
				onSubmit={handleLogin}
				className='relative flex flex-col align-center justify-center flex-grow flex-shrink gap-5xl w-full max-w-[88%] md:max-w-[72%] mx-auto'>
				<nav className='flex items-center justify-between gap-5xs '>
					<Figure src='/vite.svg' className='w-[4rem]' />
					<ThemeToggle />
				</nav>
				<fieldset className='relative flex flex-col gap-nm overflow-hidden flex-shrink max-w-full'>
					<header>
						<h1 className='text-accent-600'>Inicie sesion</h1>
						<p>Bienvenido de vuelta</p>
					</header>
					<Field
						label='Correo Electronico'
						leading_icon='email'
						value={username}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
					/>
					<Field
						label='Clave'
						leading_icon='lock'
						value={password}
						type='password'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
				</fieldset>
				<footer className='flex items-center gap-4xs'>
					<Button
						filled
						active
						text='Iniciar'
						type='submit'
						className='rounded-5xl'
					/>
				</footer>
			</form>
		</Layout>
	);
}
