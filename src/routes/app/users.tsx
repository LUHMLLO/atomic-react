import { ChangeEvent, useEffect, useState } from 'react';
import {
	$userDetails,
	$users,
	CreateUser,
	GetUserDetails,
	GetUsers,
	UpdateUser,
} from '@/api/users';
import { useNavigate, useParams } from 'react-router-dom';

import Layout from '@/layouts/app';
import Button from '@/components/molecules/button';
import Field from '@/components/molecules/field';
import { CreateUserData, UpdateUserData } from '@/api/_interfaces';
import Link from '@/components/molecules/link';
import { $setNotification } from '@/commons/stores/notifications';
import DataTableComponent from '@/components/widgets/dataTableComponent';
import { TableColumn } from 'react-data-table-component';
import RolesDropdown from '@/components/widgets/rolesDropdown';

type UserTableRow = {
	idusuario: number;
	idsocio: number;
	nombreempresa: string;
	email: string;
	telefono: string;
	direccion: string;
	nombreusuario: string;
	estado: string;
};

const columnNames: TableColumn<UserTableRow>[] = [
	{
		name: 'idusuario',
		selector: (row) => row.idusuario,
		sortable: true,
	},
	{
		name: 'idsocio',
		selector: (row) => row.idsocio,
		sortable: true,
	},
	{
		name: 'nombreempresa',
		selector: (row) => row.nombreempresa,
		sortable: true,
	},
	{
		name: 'email',
		selector: (row) => row.email,
		sortable: true,
	},
	{
		name: 'telefono',
		selector: (row) => row.telefono,
		sortable: true,
	},
	{
		name: 'direccion',
		selector: (row) => row.direccion,
		sortable: true,
	},
	{
		name: 'nombreusuario',
		selector: (row) => row.nombreusuario,
		sortable: true,
	},
	{
		name: 'estado',
		selector: (row) => row.estado,
		sortable: true,
	},
];

export function UsersList() {
	const [userList, setUserList] = useState([...$users.get()]);

	useEffect(() => {
		const unsubscribe = $users.subscribe((users) => {
			setUserList([...users]);
		});

		GetUsers();
		console.count('i should only log 1');

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Layout>
			<div className='flex items-center justify-between'>
				<h1>Usuarios</h1>
				<Link
					url='/#/users/create'
					leading_icon='add'
					text='Agregar usuario nuevo'
				/>
			</div>
			<DataTableComponent
				columns={columnNames as TableColumn<unknown>[]}
				data={userList}
			/>
		</Layout>
	);
}

export function UserDetails() {
	const { id } = useParams();

	const [userDetails, setUserDetails] = useState($userDetails.get());

	useEffect(() => {
		const unsubscribe = $userDetails.subscribe((user) => {
			setUserDetails(user);
		});

		if (id) {
			GetUserDetails(id);
			console.count('i should only log 1');
		} else {
			$setNotification({
				title: 'Error',
				content: 'Failed to retrieve user details',
				icon: 'warning',
			});
		}

		return () => {
			unsubscribe();
		};
	}, [id]);

	return (
		<Layout>
			<h1>Perfil de {userDetails?.nombreusuario}</h1>
			<p>{userDetails?.nombreusuario}</p>
		</Layout>
	);
}

export function UserCreate() {
	const [business] = useState(1);
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [zone, setZone] = useState(1);
	const [direction, setDirection] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState(0);
	const [state] = useState(true);

	const navigate = useNavigate();

	const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: CreateUserData = {
			idEmpresa: business,
			nombrePersonal: fullname,
			nombreUsuario: username,
			claveUsuario: password,
			telefono: phone,
			idRol: role,
			estado: state,
			email: email,
			idZona: zone,
			direccion: direction,
		};

		await CreateUser(data, navigate);
	};

	return (
		<Layout>
			<h1>Crear usuario</h1>
			<section>
				<h2>Requerido</h2>

				<form
					onSubmit={handleCreate}
					className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
					<Field
						label='Nombre Completo'
						leading_icon='text_fields'
						value={fullname}
						placeholder='Nombre completo'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFullname(e.target.value)
						}
					/>
					<Field
						label='Nombre de Usuario'
						leading_icon='account_circle'
						value={username}
						placeholder='Nombre de usuario'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
					/>
					<Field
						label='Clave'
						leading_icon='key'
						value={password}
						placeholder='Clave'
						type='password'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<Field
						label='Telefono'
						leading_icon='phone'
						value={phone}
						placeholder='Telefono'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPhone(e.target.value)
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
				</form>
			</section>
			<section>
				<h2>Opcional</h2>

				<form
					onSubmit={handleCreate}
					className='flex flex-col gap-nm bg-neutral-100 dark:bg-neutral-900 p-2xl rounded-5xs'>
					<Field
						label='Correo electronico'
						leading_icon='email'
						value={email}
						placeholder='Correo electronico'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
					/>
					<Field
						label='Zona'
						leading_icon='location_on'
						value={zone}
						placeholder='Zone'
						type='number'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setZone(Number(e.target.value))
						}
					/>
					<Field
						label='Direccion'
						leading_icon='map'
						value={direction}
						placeholder='Direccion'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setDirection(e.target.value)
						}
					/>
					<Button
						filled
						active
						rounded
						borderless
						text='Create'
						type='submit'
					/>
				</form>
			</section>
		</Layout>
	);
}

export function UserUpdate() {
	const { id } = useParams();

	const [userDetails, setUserDetails] = useState($userDetails.get());

	useEffect(() => {
		const unsubscribe = $userDetails.subscribe((user) => {
			setUserDetails(user);
		});

		if (id) {
			GetUserDetails(id);
			console.count('i should only log 1');
		} else {
			$setNotification({
				title: 'Error',
				content: 'Failed to retrieve user details',
				icon: 'warning',
			});
		}

		return () => {
			unsubscribe();
		};
	}, [id]);

	const [business, setBusiness] = useState('');
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [zone, setZone] = useState('');
	const [direction, setDirection] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');
	const [state] = useState(false);

	const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: UpdateUserData = {
			id: Number(id),
			idEmpresa: Number(business),
			nombrePersonal: fullname,
			email: email,
			telefono: phone,
			idZona: Number(zone),
			direccion: direction,
			nombreUsuario: username,
			claveUsuario: password,
			idRol: Number(role),
			estado: state,
		};

		await UpdateUser(data);
	};

	return (
		<Layout>
			<header>
				<h1>Actualizar usuario {userDetails?.nombreusuario}</h1>
			</header>
			<section>
				<h2>Detalles</h2>

				<form onSubmit={handleCreate} className='flex flex-col gap-nm'>
					<Field
						label='ID de Empresa'
						leading_icon='corporate_fare'
						value={business}
						placeholder='ID de empresa'
						type='number'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setBusiness(e.target.value)
						}
					/>
					<Field
						label='Nombre Completo'
						leading_icon='text_fields'
						value={fullname}
						placeholder='Nombre completo'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFullname(e.target.value)
						}
					/>
					<Field
						label='Correo electronico'
						leading_icon='email'
						value={email}
						placeholder='Correo electronico'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
					/>
					<Field
						label='Telefono'
						leading_icon='phone'
						value={phone}
						placeholder='Telefono'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPhone(e.target.value)
						}
					/>
					<Field
						label='Zona'
						leading_icon='location_on'
						value={zone}
						placeholder='Zone'
						type='number'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setZone(e.target.value)
						}
					/>
					<Field
						label='Direccion'
						leading_icon='map'
						value={direction}
						placeholder='Direccion'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setDirection(e.target.value)
						}
					/>
					<Field
						label='Nombre de Usuario'
						leading_icon='account_circle'
						value={username}
						placeholder='Nombre de usuario'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUsername(e.target.value)
						}
					/>
					<Field
						label='Clave'
						leading_icon='key'
						value={password}
						placeholder='Clave'
						type='password'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<Field
						label='Rol'
						leading_icon='label'
						value={role}
						type='number'
						placeholder='Rol'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setRole(e.target.value)
						}
					/>
					<Button
						filled
						active
						rounded
						borderless
						text='Create'
						type='submit'
					/>
				</form>
			</section>
		</Layout>
	);
}
