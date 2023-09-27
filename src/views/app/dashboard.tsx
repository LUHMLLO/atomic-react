import Layout from '@/layouts/app';
import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';

export default function Route() {
	return (
		<Layout>
			<header className='flex items-center justify-between'>
				<span className='flex items-center gap-2xs'>
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
		</Layout>
	);
}
