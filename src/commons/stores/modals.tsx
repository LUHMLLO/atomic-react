import { map } from 'nanostores';

export const Modal = map({
	isOpen: false,
	icon: '',
	title: '',
	content: '',
});

export function SetModal(payload: {
	isOpen: boolean;
	icon: string;
	title: string;
	content: string;
}) {
	Modal.set({
		isOpen: payload.isOpen,
		icon: payload.icon,
		title: payload.title,
		content: payload.content,
	});
}
