import React from 'react';
import Button from '@/components/molecules/button';

interface Props {
	buttons: Array<{
		className?: string;
		filled?: boolean;
		leading_icon?: string;
		leading_icon_fill?: boolean;
		text?: string;
		trailing_icon?: string;
		trailing_icon_fill?: boolean;
	}>;
	className?: string;
	filled?: boolean;
	rounded?: boolean;
	borderless?: boolean;
}

const Buttongroup: React.FC<Props> = ({
	buttons,
	className = '',
	filled = false,
	rounded = false,
	borderless = false,
}) => {
	const states_outline = `outline outline-2 outline-neutral-900`;

	return (
		<ul
			className={`
				inline-flex items-stretch justify-center flex-shrink overflow-hidden whitespace-nowrap w-max gap-1
				${!filled && !borderless && states_outline} 
				${rounded && 'rounded-5xs'}
				${className}
			`}>
			{buttons.map((btn, index) => (
				<Button
					key={index}
					text={btn.text}
					leading_icon={btn.leading_icon}
					leading_icon_fill={btn.leading_icon_fill}
					trailing_icon={btn.trailing_icon}
					trailing_icon_fill={btn.trailing_icon_fill}
					filled={filled}					
				/>
			))}
		</ul>
	);
};

export default Buttongroup;
