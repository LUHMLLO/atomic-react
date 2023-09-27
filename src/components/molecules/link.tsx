import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	url?: string;
	alwaysHighlighted?: boolean;
}

const Link: React.FC<Props> = ({
	className = '',
	leading_icon = '',
	leading_icon_fill = false,
	text = '',
	trailing_icon = '',
	trailing_icon_fill = false,
	url = '',
	alwaysHighlighted = false,
}) => {
	return (
		<a
			href={url ? url : '#'}
			className={`inline-flex items-center gap-5xs w-max font-medium ${
				alwaysHighlighted ? 'text-emerald-600 ' : 'text-inherit'
			} ${className} hover:text-accent-400 focus:text-accent-600 active:text-accent-700`}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			{text && <Text tag='span' text={text} />}
			{trailing_icon && (
				<Icon name={trailing_icon} filled={trailing_icon_fill} />
			)}
		</a>
	);
};

export default Link;
