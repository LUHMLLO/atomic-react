import React, { ChangeEvent, useEffect, useState } from 'react';
import { PasswordData, UpdateUserData } from '@/api/_interfaces';
import { ResetUserPassword, UpdateUser } from '@/api/users';
import Button from '@/components/molecules/button';
import Field from '@/components/molecules/field';
import Layout from '@/layouts/app';
import { useStore } from '@nanostores/react';
import { $profile } from '@/api/profile';
import RolesDropdown from '@/components/widgets/rolesDropdown';

export default function Route() {
	const profileData = useStore($profile);

	const [business, setBusiness] = useState(0);
	const [fullname, setFullname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [zone, setZone] = useState(0);
	const [direction, setDirection] = useState('');
	const [role, setRole] = useState(0);
	const [state, setState] = useState(false);

	const [currentPassword, setCurrentPassword] = useState('');

	const [newPassword, setNewPassword] = useState('');
	const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

	useEffect(() => {
		setBusiness(profileData?.idEmpresa || 1);
		setFullname(profileData?.nombrePersonal || '');
		setUsername(profileData?.nombreUsuario || '');
		setEmail(profileData?.email || '');
		setPhone(profileData?.telefono || '');
		setZone(profileData?.idZona || 0);
		setDirection(profileData?.direccion || '');
		setRole(profileData?.idRol || 0);
		setState(profileData?.estado || false);
	}, [
		profileData?.direccion,
		profileData?.email,
		profileData?.estado,
		profileData?.idEmpresa,
		profileData?.idRol,
		profileData?.idZona,
		profileData?.nombrePersonal,
		profileData?.nombreUsuario,
		profileData?.telefono,
	]);

	let data: UpdateUserData = {
		id: 0,
	};

	if (profileData) {
		data = {
			id: profileData.id,
			idEmpresa: profileData.idEmpresa,
			nombrePersonal: profileData.nombrePersonal,
			nombreUsuario: profileData.nombreUsuario,
			telefono: profileData.telefono,
			idRol: profileData.idRol || 0,
			estado: profileData.estado || true,
		};
	}

	const handleUpdateDetails = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (profileData) {
			if (business) {
				data.idEmpresa = business;
			}
			if (fullname) {
				data.nombrePersonal = fullname;
			}
			if (email) {
				data.email = email;
			}
			if (phone) {
				data.telefono = phone;
			}
			if (zone) {
				data.idZona = zone;
			}
			if (direction) {
				data.direccion = direction;
			}

			await UpdateUser(data);
		}
	};

	const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (profileData) {
			if (username) {
				data.nombreUsuario = username;
			}
			if (role) {
				data.idRol = role;
			}
			if (state) {
				data.estado = state;
			}

			await UpdateUser(data);
		}
	};

	const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (profileData) {
			if (currentPassword) {
				data.claveUsuario = currentPassword.trim();
			}

			await UpdateUser(data);
		}
	};

	const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: PasswordData = {
			clave: newPassword,
			confirmarClave: newPasswordConfirmation,
		};

		await ResetUserPassword(profileData!.id.toString(), data);
	};

	return (
		<Layout>
			<article className='flex flex-col gap-2xl'>
				<header>
					<h1>Perfil de {profileData?.nombrePersonal}</h1>
				</header>
				<section>
					<h2>Detalles</h2>

					<form
						onSubmit={handleUpdateDetails}
						className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
						{/* <Field
							label='Empresa'
							leading_icon='text_fields'
							value={business}
							placeholder='Ej:. 1'
							type='number'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setBusiness(Number(e.target.value))
							}
						/> */}
						<Field
							label='Nombre Completo'
							leading_icon='text_fields'
							value={fullname}
							type='text'
							placeholder='Ej:. Francisco Mora Sanchez'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setFullname(e.target.value)
							}
						/>
						<Field
							label='Correo Electronico'
							leading_icon='email'
							value={email}
							type='email'
							placeholder='Ej:. jsmith_test@gmail.com'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
						/>
						<Field
							label='Telefono'
							leading_icon='phone'
							value={phone}
							placeholder='Ej:. 8090001234'
							type='number'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPhone(e.target.value)
							}
						/>
						<Field
							label='Zona'
							leading_icon='map'
							value={zone}
							placeholder='Ej:. 1'
							type='number'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setZone(Number(e.target.value))
							}
						/>
						<Field
							label='Direccion'
							leading_icon='map'
							value={direction}
							placeholder='Ej:. Santiago, Gurabo, Calle #10....'
							type='address'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDirection(e.target.value)
							}
						/>
						<Button
							filled
							active
							rounded
							borderless
							text='Actualizar y guardar cambios'
							type='submit'
						/>
					</form>
				</section>

				<hr className='block w-full h-3 my-xl bg-neutral-200 dark:bg-neutral-900 border-none' />

				<section>
					<h2>Usuario</h2>

					<form
						onSubmit={handleUpdateUser}
						className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
						<Field
							label='Nombre de usuario'
							leading_icon='text_fields'
							value={username}
							placeholder='Ej:. js01'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setUsername(e.target.value)
							}
						/>
						<fieldset className='flex flex-col gap-5xs flex-shrink'>
							<label>Roles</label>

							<RolesDropdown
								position='bottom'
								value={role}
								onChange={(e) => {
									setRole(Number(e));
								}}
							/>
						</fieldset>
						<Button
							filled
							active
							rounded
							borderless
							text='Actualizar y guardar cambios'
							type='submit'
						/>
					</form>
				</section>

				<hr className='block w-full h-3 my-xl bg-neutral-200 dark:bg-neutral-900 border-none' />

				<section>
					<h2>Cambiar clave de acceso</h2>

					<form
						onSubmit={handleUpdatePassword}
						className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
						<Field
							label='Clave Actual'
							leading_icon='key'
							value={currentPassword}
							type='password'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setCurrentPassword(e.target.value)
							}
						/>
						<Button
							filled
							active
							rounded
							borderless
							text='Actualizar y guardar cambios'
							type='submit'
						/>
					</form>
				</section>

				<hr className='block w-full h-3 my-xl bg-neutral-200 dark:bg-neutral-900 border-none' />

				<section>
					<h2>Resetear clave (Admin?)</h2>

					<form
						onSubmit={handleReset}
						className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
						<Field
							label='Clave Nueva'
							leading_icon='key'
							value={newPassword}
							type='password'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setNewPassword(e.target.value)
							}
						/>
						<Field
							label='Confirmar Clave Nueva'
							leading_icon='key'
							value={newPasswordConfirmation}
							type='password'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setNewPasswordConfirmation(e.target.value)
							}
						/>
						<Button
							filled
							active
							rounded
							borderless
							text='Reset'
							type='submit'
						/>
					</form>
				</section>
			</article>
		</Layout>
	);
}
