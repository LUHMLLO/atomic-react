import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	alwaysHighlighted?: boolean;
	borderless?: boolean;
	className?: string;
	filled?: boolean;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	onClick?: () => void;
	rounded?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	type?: 'button' | 'reset' | 'submit' | undefined;
}

const Button: React.FC<Props> = ({
	alwaysHighlighted = false,
	borderless,
	className,
	filled,
	leading_icon,
	leading_icon_fill,
	onClick,
	rounded,
	text,
	trailing_icon,
	trailing_icon_fill,
	type,
}) => {
	return (
		<button
			type={type}
			className={`
				inline-flex items-center gap-3xs max-w-full font-bold text-5xl  
				${borderless ? '' : 'outline outline-2 outline-zinc-800'} 
				${!alwaysHighlighted && filled && 'bg-zinc-800 text-neutral-400'}
				${alwaysHighlighted && filled && 'bg-emerald-600 text-emerald-950'}
				${alwaysHighlighted && !filled && 'outline-emerald-600 text-neutral-400'}
				${rounded && 'rounded-5xs'} 
				${text ? 'px-5xl py-sm' : 'p-5xs'}
				${className}
			`}
			onClick={onClick}>
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
