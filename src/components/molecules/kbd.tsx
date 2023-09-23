import React from 'react';
import Icon from '@/components/atoms/icon'; // Update the import path
import Text from '@/components/atoms/text'; // Update the import path

interface Props {
	leading: string;
	leading_variant: string;
	trailing: string;
	trailing_variant: string;
	className?: string;
	leading_filled?: boolean;
	trailing_filled?: boolean;
}

const Kbd: React.FC<Props> = (props) => {
	const {
		leading,
		leading_variant,
		trailing,
		trailing_variant,
		className,
		leading_filled,
		trailing_filled,
	} = props;

	return (
		<kbd
			className={`inline-flex items-center justify-center px-4xs py-5xs rounded-5xs bg-neutral-800 text-neutral-400 outline outline-1 outline-neutral-900 ${className}`}>
			{leading && leading_variant === 'icon' && (
				<Icon name={leading} filled={leading_filled} className='text-nm' />
			)}

			{leading && leading_variant === 'text' && (
				<Text tag='p' text={leading} className='g-nm w-xs text-center' />
			)}

			<Icon name='add' className='text-nm' />

			{trailing && trailing_variant === 'icon' && (
				<Icon name={trailing} filled={trailing_filled} className='text-nm' />
			)}

			{trailing && trailing_variant === 'text' && (
				<Text tag='p' text={trailing} className='g-nm w-xs text-center' />
			)}
		</kbd>
	);
};

export default Kbd;
