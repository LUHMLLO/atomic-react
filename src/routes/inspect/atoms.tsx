import PageLayout from '@/layouts/lab';
import { allowedTextTags } from '@/commons/utils/allowedItems';
import Check from '@/components/atoms/check';
import Figure from '@/components/atoms/figure';
import Icon from '@/components/atoms/icon';
import Radio from '@/components/atoms/radio';
import Spacer from '@/components/atoms/spacer';
import Text from '@/components/atoms/text';

const DocBox =
	'flex items-center justify-center p-nm aspect-square outline-dashed outline-neutral-200 rounded-md gap-5xs overflow-hidden relative';

export default function Route(): JSX.Element {
	return (
		<PageLayout>
			<div className={`flex-row ${DocBox}`}>
				<Check checked />
				<Check />
				<Check />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Figure src='/vite.svg' />
			</div>

			<div className={`flex-row ${DocBox}`}>
				<Icon name='person' filled />
				<Icon name='person' />
			</div>

			<div className={`flex-row ${DocBox}`}>
				<Radio groupName='test' />
				<Radio groupName='test' checked />
				<Radio groupName='test' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Spacer direction='horizontal' className='bg-accent-600' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Spacer direction='vertical' className='bg-accent-600' />
			</div>

			{allowedTextTags.map((tag, index) => (
				<div className={`flex-col ${DocBox}`} key={index}>
					<Text tag={tag} text={tag} />
				</div>
			))}
		</PageLayout>
	);
}
