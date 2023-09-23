import React from 'react';
import Icon from '@/components/atoms/icon';

interface Props {
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	placeholder?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
}

const InputField: React.FC<Props> = (props) => {
	const {
		className,
		leading_icon,
		leading_icon_fill,
		placeholder,
		trailing_icon,
		trailing_icon_fill,
	} = props;

	return (
		<fieldset
			className={`flex items-center gap-5xs px-xs py-2xs rounded-5xs border-2 border-neutral-600 focus-within:border-accent-500 max-w-full ${className}`}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			<input
				type='text'
				placeholder={placeholder}
				className='flex-grow flex-shrink rounded-0 bg-transparent border-none outline-none placeholder-text-neutral-500'
			/>
			{trailing_icon && (
				<Icon name={trailing_icon} filled={trailing_icon_fill} />
			)}
		</fieldset>
	);
};

export default InputField;
