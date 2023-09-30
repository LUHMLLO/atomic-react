import { ReactNode } from 'react';
import Figure from '@/components/atoms/figure';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<div className='flex w-screen h-screen isolate'>
			<aside className='relative hidden md:inline-flex items-center justify-center flex-grow bg-neutral-100 z-10 overflow-hidden'>
				<Figure
					src='https://vuero.cssninja.io/assets/station-d05ed495.svg'
					className='h-full max-h-[40rem] m-auto absolute inset-auto'
				/>
			</aside>

			<main className='flex items-center justify-center flex-grow max-w-[40rem] h-screen bg-slate-50 z-20 isolate overflow-hidden'>
				{children}
			</main>
		</div>
	);
}
export default Layout;
