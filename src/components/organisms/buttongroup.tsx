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
}

const Buttongroup: React.FC<Props> = ({ buttons, className, filled }) => {
	return (
		<ul
			className={`inline-flex items-stretch justify-center flex-shrink rounded-5xs gap-8xs overflow-hidden whitespace-nowrap w-max ${
				filled ? 'bg-neutral-950' : 'border-2 border-neutral-900 bg-neutral-900'
			} ${className}`}>
			{buttons.map((btn, index) => (
				<Button
					key={index}
					text={btn.text}
					leading_icon={btn.leading_icon}
					leading_icon_fill={btn.leading_icon_fill}
					trailing_icon={btn.trailing_icon}
					trailing_icon_fill={btn.trailing_icon_fill}
					filled
					flat
					borderless
					className={filled ? '' : 'bg-neutral-950'}
				/>
			))}
		</ul>
	);
};

export default Buttongroup;
