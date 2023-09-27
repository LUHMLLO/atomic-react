import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	active?: boolean;
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
	active = false,
	borderless = false,
	className,
	filled = false,
	leading_icon,
	leading_icon_fill = false,
	onClick,
	rounded = false,
	text,
	trailing_icon,
	trailing_icon_fill = false,
	type,
}) => {
	const states_filled = `
		${active ? 'hover:bg-accent-400' : 'hover:bg-neutral-700'} 
		${active ? 'bg-accent-500 text-accent-950' : 'bg-neutral-800'} 
		${active ? 'active:bg-accent-600' : 'active:bg-neutral-900'} 
	`;

	const states_hollow = `
		${active ? 'hover:text-accent-400' : 'hover:text-neutral-300'} 
		${active ? 'text-accent-500' : 'bg-transparent text-neutral-400'} 
		${active ? 'active:text-accent-600' : 'active:text-neutral-500'} 
	`;

	const states_outline = `outline outline-2
		${
			active
				? 'hover:outline-accent-400 hover:text-accent-400'
				: 'hover:outline-inherit hover:text-neutral-300'
		} 
		${
			active
				? 'outline-accent-500 text-accent-500'
				: 'outline-inherit text-neutral-400'
		} 
		${
			active
				? 'active:outline-accent-600 active:text-accent-600'
				: 'active:outline-inherit active:text-neutral-500'
		} 
	`;

	return (
		<button
			type={type}
			className={`
				inline-flex items-center gap-5xs max-w-full font-bold text-5xl  
				
				${!borderless && !filled && states_outline}
				${borderless && !filled && states_hollow}
				${filled && states_filled}	
				
				${rounded && 'rounded-5xs'} 
				${text ? 'px-sm py-xs' : 'p-5xs'}
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
