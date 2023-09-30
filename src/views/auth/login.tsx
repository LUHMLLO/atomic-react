import Layout from '@/layouts/auth';
import React, { ChangeEvent, useState } from 'react';
// import { useStore } from '@nanostores/react';

// import { userStore } from '@/api/stores';
import { LoginData } from '@/api/interfaces';
import { Endpoint_Login } from '@/api/login.endpoint';

import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';
import Field from '@/components/molecules/field';
import Link from '@/components/molecules/link';
import Switchbox from '@/components/organisms/switchbox';
import ThemeToggle from '@/components/widgets/themetoggle';

export default function Route() {
	// const { nombreUsuario } = useStore(userStore);

	const [username, setUsername] = useState('js');
	const [password, setPassword] = useState('123456');

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: LoginData = {
			nombreUsuario: username,
			claveUsuario: password,
		};

		await Endpoint_Login(data);
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
						<Text tag='p' text={`Welcome back {} to your account.`} />
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
						<Switchbox label='Remember Me' />
						<Link text='Forgot Password?' />
					</div>
				</fieldset>
				<footer className='flex items-center gap-4xs'>
					<Button
						filled
						active
						text='Confirm'
						type='submit'
						className='rounded-5xl'
					/>
					Or <Link text='Create' alwaysHighlighted /> an account.
				</footer>
			</form>
		</Layout>
	);
}
