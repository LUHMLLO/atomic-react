import React from 'react';
import Icon from '@/components/atoms/icon';

interface Props {
	active?: boolean;
	borderless?: boolean;
	className?: string;
	filled?: boolean;
	icon?: string;
	onClick?: () => void;
	rounded?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	type?: 'button' | 'reset' | 'submit' | undefined;
}

const Fab: React.FC<Props> = ({
	active = false,
	borderless = false,
	className,
	filled = false,
	icon,
	onClick,
	rounded = false,
	type,
}) => {
	const states_filled = `
		${active ? 'hover:bg-accent-400' : 'hover:bg-neutral-700'} 
		${active ? 'bg-accent-500 text-accent-950' : 'bg-neutral-800'} 
		${active ? 'active:bg-accent-600' : 'active:bg-neutral-900'} 
	`;

	const states_hollow = `
		${active ? 'hover:text-accent-400' : 'hover:text-neutral-300'} 
		${active ? 'text-accent-500' : 'bg-neutral-950 text-neutral-400'} 
		${active ? 'active:text-accent-600' : 'active:text-neutral-500'} 
	`;

	const states_outline = `outline outline-2
		${
			active
				? 'hover:outline-accent-400 hover:text-accent-400'
				: 'hover:outline-neutral-300 hover:text-neutral-300'
		} 
		${
			active
				? 'outline-accent-500 text-accent-500'
				: 'outline-neutral-400 text-neutral-400'
		} 
		${
			active
				? 'active:outline-accent-600 active:text-accent-600'
				: 'active:outline-neutral-500 active:text-neutral-500'
		} 
	`;

	return (
		<button
			type={type}
			className={`
				inline-flex items-center gap-5xs p-5xs max-w-full font-bold text-5xl  
				
				${!borderless && !filled && states_outline}
				${borderless && !filled && states_hollow}
				${filled && states_filled}	
				
				${rounded && 'rounded-5xl'} 
				${className}
			`}
			onClick={onClick}>
			{icon && <Icon name={icon} filled={filled} />}
		</button>
	);
};

export default Fab;
