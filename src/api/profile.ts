import axios from 'axios';
import { atom } from 'nanostores';
import { $account } from '@/api/account';
import { Profile } from '@/api/_interfaces';
import { HandleApiError } from './utils.axios';

// nanostores
export const $profile = atom<Profile | null>(null);

// Function to set the profile in the $profile store
export function $setProfile(profile: Profile | null) {
    $profile.set(profile);
}

// Axios endpoint

// Function to fetch the user's profile
export async function GetProfile() {
    const account = $account.get();

    try {
        const response = await axios.get(
            import.meta.env.VITE_ENDPOINT_PROFILE,
            {
                headers: {
                    Authorization: `Bearer ${account}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 200) {
            const profile: Profile = await response.data;
            $setProfile(profile);
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}
