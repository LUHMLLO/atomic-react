import React from 'react';

interface Props {
	groupName: string;
	checked?: boolean;
	className?: string;
}

const RadioButton: React.FC<Props> = (props) => {
	const { groupName, checked, className } = props;

	return (
		<input
			type='radio'
			className={className}
			name={groupName}
			checked={checked}
		/>
	);
};

export default RadioButton;
