import React from 'react';

interface Props {
	name: string;
	className?: string;
	filled?: boolean;
}

const Icon: React.FC<Props> = (props) => {
	const { name, className, filled } = props;

	const iconStyle: React.CSSProperties = {
		fontVariationSettings: `FILL ${filled ? 1 : 0}`,
	};

	return (
		<i className={`material-symbols-rounded ${className}`} style={iconStyle}>
			{name}
		</i>
	);
};

export default Icon;
