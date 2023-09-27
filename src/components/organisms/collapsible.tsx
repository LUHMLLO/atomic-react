import React, { ReactNode } from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	text: string;
	className?: string;
	minimal?: boolean;
	leading_icon?: string;
	leading_icon_filled?: boolean;
	children?: ReactNode;
}

const Collapsible: React.FC<Props> = ({
	text,
	className,
	minimal,
	leading_icon,
	leading_icon_filled,
	children,
}) => {
	return (
		<details
			className={`w-full rounded-5xs overflow-hidden ${
				minimal ? '' : 'bg-zinc-900'
			} ${className}`}>
			<summary
				className={`flex items-center gap-5xs w-full cursor-pointer ${
					minimal ? '' : 'px-nm py-sm'
				}`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_filled} />
				)}
				<Text tag='span' text={text} className='w-full' />
				<Icon name='expand_more' />
			</summary>
			<ul className={`flex flex-col gap-5xs p-5xs w-full ${minimal ? '':'bg-zinc-800'}`}>{children}</ul>
		</details>
	);
};

export default Collapsible;
