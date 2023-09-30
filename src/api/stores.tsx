import { atom } from 'nanostores';
import { User } from './interfaces';

export const $user = atom<User | null>(null);

export function setUser(user: User | null) {
	$user.set(user);
}
