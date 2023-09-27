import { ReactNode } from 'react';
import Figure from '@/components/atoms/figure';
import Icon from '@/components/atoms/icon';
import Button from '@/components/molecules/button';
import Link from '@/components/molecules/link';
import ThemeToggle from '@/components/widgets/themetoggle';
import Fab from '@/components/widgets/fab';

function Layout({ children }: { children?: ReactNode }): JSX.Element {
	return (
		<div className='flex items-center w-screen h-screen overflow-hidden'>
			<aside className='flex flex-col items-center gap-5xl p-2xl h-screen overflow-y-auto bg-neutral-900'>
				<nav className='flex flex-col flex-grow items-center justify-end'>
					<Figure src='/favicon.svg' className='w-[2.5rem]' />
				</nav>
				<nav className='flex flex-col gap-5xl h-full'>
					<Icon name='bolt' className='text-3xl' />
					<Icon name='grid_view' className='text-3xl' />
					<Icon name='deployed_code' className='text-3xl' />
					<Icon name='memory' className='text-3xl' />
					<Icon name='inbox' className='text-3xl' />
				</nav>
				<nav className='flex flex-col flex-grow items-center justify-end'>
					<Figure
						src='https://vuero.cssninja.io/images/avatars/svg/vuero-1.svg'
						className='w-[2.5rem]'
					/>
				</nav>
			</aside>
			<main className='flex flex-col w-full h-screen overflow-y-auto'>
				<div className='flex flex-col w-full gap-2xl p-2xl max-w-[80rem] mx-auto'>
					<nav className='flex items-center justify-between'>
						<nav className='flex items-center'>
							<Link leading_icon='sort' text='Menu' />
						</nav>
						<nav className='flex items-center justify-end'>
							<ThemeToggle />
							<Button leading_icon='globe' rounded borderless />
							<Button leading_icon='notifications' rounded borderless />
							<Button leading_icon='grid_view' rounded borderless />
						</nav>
					</nav>
					{children}
				</div>
				<Fab
					icon='menu'
					filled
					rounded
					className='fixed top-0 right-0 m-xs p-nm'
				/>
			</main>
		</div>
	);
}

export default Layout;
