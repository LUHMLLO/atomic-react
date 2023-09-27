import React, { ChangeEvent } from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	borderless?: boolean;
	className?: string;
	label?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	value?: string;
}

const Field: React.FC<Props> = ({
	borderless,
	className,
	label,
	leading_icon,
	leading_icon_fill,
	onChange,
	placeholder,
	trailing_icon,
	trailing_icon_fill,
	value,
}) => {
	return (
		<fieldset className='flex flex-col gap-5xs'>
			{label && <Text tag='label' text={label} />}
			<span
				className={`flex items-center gap-5xs rounded-5xs  max-w-full ${className} ${
					borderless
						? 'border-none p-0'
						: 'px-xs py-2xs border-2 border-zinc-800 focus-within:border-accent-600'
				}`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_fill} />
				)}
				<input
					type='text'
					placeholder={placeholder}
					className='flex-grow flex-shrink rounded-0 bg-transparent border-none outline-none placeholder-text-zinc-500'
					value={value}
					onChange={onChange}
				/>
				{trailing_icon && (
					<Icon name={trailing_icon} filled={trailing_icon_fill} />
				)}
			</span>
		</fieldset>
	);
};

export default Field;
