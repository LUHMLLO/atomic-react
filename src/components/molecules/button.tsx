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
	const style_border = `outline outline-2 outline-${
		active ? 'emerald-600' : 'neutral-400'
	} `;

	const style_noBorder = `text-${active ? 'emerald-600' : 'neutral-400'}`;

	const style_filled = `bg-${active ? 'emerald-600' : 'neutral-800'} text-${
		active ? 'emerald-950' : 'neutral-400'
	}`;

	return (
		<button
			type={type}
			className={`
				inline-flex items-center gap-5xs max-w-full font-bold text-5xl  
				
				${borderless ? style_noBorder : style_border}
				${filled && style_filled}		
				
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
