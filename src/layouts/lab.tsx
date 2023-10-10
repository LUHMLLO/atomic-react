import { $settings } from '@/commons/stores/settings';
import { ReactNode, useEffect } from 'react';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
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
		<main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2xl p-2xl'>
			{children}
		</main>
	);
}

export default Layout;
