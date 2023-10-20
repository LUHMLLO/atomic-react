import { ReactNode } from 'react';
import BaseLayout from '@/layouts/_baseLayout.tsx';

// import Fab from '@/components/widgets/fab';
import { Sidebar } from '@/components/widgets/pane.tsx';
import { Navbar } from '@/components/widgets/navbar.tsx';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<BaseLayout>
			<div className='flex items-center w-screen h-screen overflow-hidden'>
				<Sidebar />
				<main className='flex flex-col w-full h-screen overflow-y-auto'>
					<div className='flex flex-col w-full gap-2xl p-2xl md:max-w-[56rem] lg:max-w-[88%] mx-auto isolate'>
						<Navbar />
						{children}
					</div>
					{/* <Fab
						icon='menu'
						active
						filled
						rounded
						className='fixed top-0 right-0 mt-xs mr-nm p-nm shadow-sm shadow-accent-600'
					/> */}
				</main>
			</div>
		</BaseLayout>
	);
}

export default Layout;
