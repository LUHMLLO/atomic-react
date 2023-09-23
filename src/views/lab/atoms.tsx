import { allowedTextTags } from '@/commons/logic/atomicRules';

import Check from '@/components/atoms/check';
import Figure from '@/components/atoms/figure';
import Icon from '@/components/atoms/icon';
import Radio from '@/components/atoms/radio';
import Spacer from '@/components/atoms/spacer';
import Text from '@/components/atoms/text';

export default function Route() {
	return (
		<main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2xl p-2xl'>
			<div className='flex flex-row items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Check checked />
				<Check />
				<Check />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Figure src='/vite.svg' />
			</div>
			<div className='flex flex-row items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Icon name='person' filled />
				<Icon name='person' />
			</div>
			<div className='flex flex-row items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Radio groupName='test' />
				<Radio groupName='test' checked />
				<Radio groupName='test' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Spacer direction='horizontal' className='bg-accent-500' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Spacer direction='vertical' className='bg-accent-500' />
			</div>
			{allowedTextTags.map((tag) => (
				<div
					key={tag}
					className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
					<Text tag={tag} text={tag} />
				</div>
			))}
		</main>
	);
}
