import axios from 'axios';
import { persistentAtom } from '@nanostores/persistent';
import { Account, LoginData } from '@/api/_interfaces';
import { GetProfile } from '@/api/profile';
import { $setNotification } from '@/commons/stores/notifications';
import { HandleApiError } from './utils.axios';

// nanostores
export const $account = persistentAtom<Account | null>('account', null, {
    encode: JSON.stringify,
    decode: JSON.parse,
});

// Function to set the account in the $account store
export function $setAccount(account: Account | null) {
    $account.set(account);
}

// Axios endpoint

// Function to fetch the account data and perform login
export async function GetAccount(
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
            const data = await response.data
            const account: Account = data.token;
            $setAccount(account)

            GetProfile();

            $setNotification({ title: `Bienvenido de vuelta ${data.nombreUsuario}`, content: '', icon: 'check_circle' })
            navigate('/dashboard');
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}
