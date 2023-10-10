import axios from 'axios';
import { atom } from 'nanostores';
import { CreateUserData, PasswordData, UpdateUserData, User } from '@/api/_interfaces';
import { $account, $setAccount } from '@/api/account';
import { $setNotification } from '@/commons/stores/notifications';
import { HandleApiError } from './utils.axios';

// nanostores
export const $users = atom<User[]>([]);
export const $userDetails = atom<User | null>(null);

// Function to add a user to the $users store
export function $addUser(user: User) {
    $users.set([...$users.get(), user]);
}

// Function to set the entire $users store
export function $setUsers(users: User[]) {
    $users.set(users);
}

// Function to set the $userDetails store
export function $setUserDetails(user: User) {
    $userDetails.set(user);
}

// Axios endpoints

// Function to fetch users
export async function GetUsers() {
    const account = $account.get();

    try {
        const response = await axios.get(import.meta.env.VITE_ENDPOINT_USERS, {
            headers: {
                Authorization: `Bearer ${account}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const users: User[] = await response.data;
            $setUsers(users);
        } else {
            $setNotification({ title: 'Error', content: 'hubo un error cargando la lista de usuarios', icon: 'warning' })
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}

// Function to fetch user details by ID
export async function GetUserDetails(id: string) {
    const account = $account.get();

    try {
        const response = await axios.get(`${import.meta.env.VITE_ENDPOINT_USERS_DETAILS}${id}`, {
            headers: {
                Authorization: `Bearer ${account}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const user: User = await response.data;
            $setUserDetails(user);
        } else {
            $setNotification({ title: 'Error', content: 'hubo un error obteniendo el perfil de usuario', icon: 'warning' })
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}

// Function to create a new user
export async function CreateUser(data: CreateUserData, navigate: (path: string) => void) {
    const account = $account.get();

    try {
        const response = await axios.post(import.meta.env.VITE_ENDPOINT_USERS_CREATE, data, {
            headers: {
                Authorization: `Bearer ${account}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            $setNotification({ title: 'Exito', content: 'nuevo usuario ha sido creado exitosamente', icon: 'check_circle' })
            navigate('/users');
        } else {
            $setNotification({ title: 'Error', content: 'hubo un error creando el usuario', icon: 'warning' })
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}

// Function to update user data
export async function UpdateUser(data: UpdateUserData) {
    const account = $account.get();

    if (data.idRol && data.idRol === 0) {
        $setNotification({ title: 'Error', content: 'Rol invalidado', icon: 'warning' })
        return;
    }

    if (data.claveUsuario && data.claveUsuario.length < 6) {
        $setNotification({ title: 'Error', content: 'Las claves deben tener minimo 6 caracteres', icon: 'warning' })
        return;
    }

    try {
        // console.table(data)

        const response = await axios.post(import.meta.env.VITE_ENDPOINT_USERS_CREATE, data, {
            headers: {
                Authorization: `Bearer ${account}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            if (data.claveUsuario) {
                $setAccount(null);
                $setNotification({ title: 'Usuario actualizado exitosamente', content: 'debido a que su clave ha sido actualizada debera iniciar sesion nuevamente', icon: 'info' })
            }
            else {
                $setNotification({ title: 'Usuario actualizado exitosamente', content: 'su perfil de usuario a sido actualizado con exito', icon: 'check_circle' })
            }
        } else {
            $setNotification({ title: 'Error', content: response.toString(), icon: 'warning' })
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}

// Function to reset a user's password
export async function ResetUserPassword(id: string, data: PasswordData) {
    const account = $account.get();

    if (data.clave != data.confirmarClave) {
        $setNotification({ title: 'Error', content: 'Las claves digitadas no coinciden', icon: 'warning' })
        return;
    }

    if (data.clave && data.clave.length < 6) {
        $setNotification({ title: 'Error', content: 'Las claves deben tener minimo 6 caracteres', icon: 'warning' })
        return;
    }

    try {
        const response = await axios.patch(
            `${import.meta.env.VITE_ENDPOINT_USERS_RESET}${id}/password/update`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${account}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 204) {
            $setAccount(null);
            $setNotification({ title: 'Clave restablecida', content: 'inicie sesion nuevamente', icon: 'info' })
        } else {
            $setNotification({ title: 'Error', content: 'no se pudo restablecer la clave', icon: 'warning' })
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}
