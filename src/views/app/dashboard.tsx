import Layout from '@/layouts/app';
import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Button from '@/components/molecules/button';
import Chart from '@/components/widgets/chart';

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
					{[
						{
							icon: '',
							title: 'Total Sales',
							amount: '$641.1K',
						},
						{
							icon: '',
							title: 'Total Income',
							amount: '$389.9K',
						},
						{
							icon: '',
							title: 'New Order',
							amount: '371',
						},
						{
							icon: '',
							title: 'Abandonned',
							amount: '29',
						},
					].map((_, index) => (
						<li
							className='aspect-square bg-neutral-200 rounded-5xs p-nm'
							key={index}>
							{index}
						</li>
					))}
				</ul>
				<ul className='grid grid-cols-2 gap-2xs'>
					{Array.from({ length: 2 }).map((_, index) => (
						<li
							className='aspect-square bg-neutral-200 rounded-5xs p-nm'
							key={index}>
							<Chart chartType='line' />
						</li>
					))}
				</ul>
				<ul className='grid grid-cols-2 gap-2xs'>
					{Array.from({ length: 2 }).map((_, index) => (
						<li
							className='aspect-video bg-neutral-200 rounded-5xs p-nm'
							key={index}>
							<Chart chartType='line' />
						</li>
					))}
				</ul>
				<ul className='grid grid-cols-2 gap-2xs'>
					{Array.from({ length: 2 }).map((_, index) => (
						<li
							className='aspect-video bg-neutral-200 rounded-5xs p-nm'
							key={index}>
							<Chart chartType='line' />
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
