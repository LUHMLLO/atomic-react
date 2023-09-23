import React from 'react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	text: string;
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	url?: string;
}

const Link: React.FC<Props> = ({
	text,
	className,
	leading_icon,
	leading_icon_fill,
	trailing_icon,
	trailing_icon_fill,
	url,
}) => {
	return (
		<a
			href={url ? url : '#'}
			className={`inline-flex items-center gap-5xs w-max text-inherit ${className}`}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			<Text tag='span' text={text} />
			{trailing_icon && (
				<Icon name={trailing_icon} filled={trailing_icon_fill} />
			)}
		</a>
	);
};

export default Link;
