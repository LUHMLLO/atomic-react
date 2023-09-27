import { ReactNode } from 'react';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<main>
			{/* The content inside the layout */}
			{children}
		</main>
	);
}

export default Layout;
