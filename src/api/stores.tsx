// import { atom } from 'nanostores';
// import { User } from './interfaces';

// export const $user = atom<User | null>(null);

// export function setUser(user: User | null) {
// 	$user.set(user);
// }

import { persistentAtom } from '@nanostores/persistent';
import { User } from './interfaces';

export const $user = persistentAtom<User | null>('user', null, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export function setUser(user: User | null) {
	$user.set(user);
}
