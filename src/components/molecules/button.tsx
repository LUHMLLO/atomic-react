import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	borderless?: boolean;
	className?: string;
	filled?: boolean;
	flat?: boolean;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
}

const Button: React.FC<Props> = (props) => {
	const {
		borderless,
		className,
		filled,
		flat,
		leading_icon,
		leading_icon_fill,
		text,
		trailing_icon,
		trailing_icon_fill,
	} = props;

	const buttonClasses = [
		'inline-flex items-center gap-3xs max-w-full',
		!borderless && 'border-2 border-neutral-600',
		filled && 'bg-neutral-900',
		!flat && 'rounded-5xs',
		text ? 'px-sm py-xs' : 'p-5xs',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={buttonClasses}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			{text && (
				<Text
					tag='span'
					text={text}
					className='flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden'
				/>
			)}
			{trailing_icon && (
				<Icon name={trailing_icon} filled={trailing_icon_fill} />
			)}
		</button>
	);
};

export default Button;
