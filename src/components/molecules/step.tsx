import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import Spacer from '@/components/atoms/spacer';

interface Props {
	text: string;
	hasBar: boolean;
	done?: boolean;
	className?: string;
}

const ListItem: React.FC<Props> = ({ text, hasBar, done, className }) => {
	return (
		<li
			className={`flex items-center gap-5xs overflow-hidden whitespace-nowrap ${className}`}>
			<Icon
				name='check_circle'
				filled={done}
				className={done ? 'text-emerald-600' : 'text-accent-900'}
			/>

			<Text tag='label' text={text} className='whitespace-nowrap' />

			{hasBar && (
				<Spacer
					direction='horizontal'
					className={done ? 'bg-emerald-600' : 'bg-accent-900'}
				/>
			)}
		</li>
	);
};

export default ListItem;
