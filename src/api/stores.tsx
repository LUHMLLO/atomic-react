import { atom } from 'nanostores';
import { User } from './interfaces';

export const userStore = atom<User | null>(null);

export function setUser(user: User): void {
	userStore.set(user);
}
