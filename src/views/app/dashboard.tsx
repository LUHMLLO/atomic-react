import Figure from '@/components/atoms/figure';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';
import Link from '@/components/molecules/link';
import ThemeToggle from '@/components/widgets/themetoggle';

export default function Route() {
	return (
		<div className='flex items-center w-screen h-screen overflow-hidden'>
			<aside className='flex'>
				<aside className='flex flex-col items-center gap-5xl p-2xl h-screen overflow-y-auto bg-neutral-900'>
					<nav className='flex flex-col flex-grow items-center justify-end'>
						<Figure src='/favicon.svg' className='w-[2.5rem]' />
					</nav>
					<nav className='flex flex-col gap-5xl h-full'>
						<Icon name='bolt' className='text-3xl' />
						<Icon name='widgets' className='text-3xl' />
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
				{/* <aside className='flex flex-col items-center gap-5xl p-2xl h-screen overflow-y-auto bg-neutral-800'>
					<nav className='flex flex-col flex-grow items-center justify-end'>
						<Figure src='/favicon.svg' className='w-[2.5rem]' />
					</nav>
					<nav className='flex flex-col gap-5xl h-full'>
						<Icon name='bolt' className='text-3xl' />
						<Icon name='widgets' className='text-3xl' />
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
				</aside> */}
			</aside>
			<div className='flex flex-col w-full h-screen overflow-y-auto gap-2xl p-2xl md:p-5xl'>
				<nav className='flex items-center justify-between'>
					<nav>
						<Link leading_icon='sort' text='Menu' />
					</nav>
					<nav>
						<ThemeToggle />
						<Button leading_icon='translate' rounded borderless />
						<Button leading_icon='inbox' rounded borderless />
						<Button leading_icon='widgets' rounded borderless />
					</nav>
				</nav>
				<header className='flex items-center justify-between'>
					<span className='flex items-center  gap-2xs'>
						<Figure
							src='https://vuero.cssninja.io/images/avatars/svg/vuero-1.svg'
							className='w-[3.5rem]'
						/>
						<span className='flex flex-col'>
							<Text tag='h6' text='Welcome back, Erik Kovalsky' />
							<Text
								tag='small'
								text='We re very happy to see you again on your dashboard'
							/>
						</span>
					</span>

					<span className='flex items-center gap-2xs'>
						<Button borderless filled rounded text='View Reports' />
						<Button borderless filled rounded text='Manage Shop' active />
					</span>
				</header>
				<section className='flex flex-col gap-2xs'>
					<ul className='grid grid-cols-4 gap-2xs'>
						{Array.from({ length: 4 }).map((_, index) => (
							<li className='aspect-square bg-neutral-800 rounded-5xs p-nm'>
								{index}
							</li>
						))}
					</ul>
					<ul className='grid grid-cols-2 gap-2xs'>
						{Array.from({ length: 2 }).map((_, index) => (
							<li className='aspect-square bg-neutral-800 rounded-5xs p-nm'>
								{index}
							</li>
						))}
					</ul>
					<ul className='grid grid-cols-2 gap-2xs'>
						{Array.from({ length: 2 }).map((_, index) => (
							<li className='aspect-video bg-neutral-800 rounded-5xs p-nm'>
								{index}
							</li>
						))}
					</ul>
					<ul className='grid grid-cols-2 gap-2xs'>
						{Array.from({ length: 2 }).map((_, index) => (
							<li className='aspect-video bg-neutral-800 rounded-5xs p-nm'>
								{index}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}
