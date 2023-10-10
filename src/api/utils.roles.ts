import axios from 'axios';
import { atom } from 'nanostores';
import { Role } from '@/api/_interfaces';
import { $account } from '@/api/account';
import { HandleApiError } from './utils.axios';

// nanostores
export const $roles = atom<Role[]>([]);

export function $addRole(role: Role) {
    $roles.set([...$roles.get(), role]);
}

export function $setRoles(roles: Role[]) {
    $roles.set(roles);
}


// Axios endpoints
export async function GetRoles() {
    const account = $account.get();

    try {
        const response = await axios.get(import.meta.env.VITE_ENDPOINT_ROLES_LIST, {
            headers: {
                Authorization: `Bearer ${account}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const roles: Role[] = await response.data;
            $setRoles(roles);
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}
