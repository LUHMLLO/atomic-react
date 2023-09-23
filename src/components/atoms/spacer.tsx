import React from 'react';

interface Props {
	direction: string;
	className?: string;
}

const Divider: React.FC<Props> = (props) => {
	const { direction, className } = props;

	const horizontalClass = direction === 'horizontal' ? 'h-5xs w-full' : '';
	const verticalClass = direction === 'vertical' ? 'h-full w-5xs' : '';

	return (
		<hr
			className={`align-middle border-none inline-flex flex-shrink min-w-nm ${horizontalClass} ${verticalClass} ${className}`}
		/>
	);
};

export default Divider;
