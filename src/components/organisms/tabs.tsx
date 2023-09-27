import React from 'react';
import Button from '@/components/molecules/button';

interface Tab {
	active?: boolean;
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
}

interface TabsProps {
	variant?: string;
	tabs: Tab[];
	className?: string;
}

const Tabs: React.FC<TabsProps> = ({ variant, tabs, className }) => {
	return (
		<ul
			className={`inline-flex items-stretch overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full ${
				variant === 'rounded' ? 'rounded-5xs' : ''
			} ${className}`}>
			{tabs.map((tab, index) => (
				<Button
					key={index}
					text={tab.text}
					leading_icon={tab.leading_icon}
					leading_icon_fill={tab.leading_icon_fill}
					trailing_icon={tab.trailing_icon}
					trailing_icon_fill={tab.trailing_icon_fill}
					borderless
					rounded
					className={`${variant === 'rounded' ? 'rounded-5xs' : ''} ${
						tab.active ? 'bg-emerald-600 text-accent-950' : ''
					}`}
				/>
			))}
		</ul>
	);
};

export default Tabs;
