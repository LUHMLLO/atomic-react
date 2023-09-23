import React from 'react';

interface Props {
	checked?: boolean;
	className?: string;
}

const Check: React.FC<Props> = (props) => {
	const { checked, className } = props;

	return <input type='checkbox' className={className} checked={checked} />;
};

export default Check;
