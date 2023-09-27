import { ReactNode } from 'react';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2xl p-2xl'>
			{/* The content inside the layout */}
			{children}
		</main>
	);
}

export default Layout;
