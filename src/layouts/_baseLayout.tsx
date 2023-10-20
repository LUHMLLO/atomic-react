import { useEffect } from 'react';
import { $settings } from '@/common/stores/settings.ts';
import Notification from '@/components/widgets/notification.tsx';
import Guard from '@/layouts/_authGuard.tsx';

interface Props {
	children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props): JSX.Element {
	useEffect(() => {
		const unsubscribe = $settings.subscribe(() => {
			const currentTheme = $settings.get().theme;
			document.documentElement.setAttribute('data-mode', currentTheme);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Guard>
			<>
				{children}
				<div className='fixed w-screen h-screen inset-0 isolate z-50 invisible'>
					<Notification className='visible' />
				</div>
			</>
		</Guard>
	);
}
