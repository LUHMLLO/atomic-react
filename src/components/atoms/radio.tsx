import React, { useState } from 'react';
import Styles from '@/commons/styles/components/radio.module.scss';

interface Props {
	groupName: string;
	checked?: boolean;
	className?: string;
}

const Radio: React.FC<Props> = ({
	groupName = '',
	checked = false,
	className = '',
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			type='radio'
			className={`${className} ${Styles}`}
			name={groupName}
			checked={isChecked}
			onChange={() => {
				console.log('ola');
				setIsChecked(!isChecked);
			}}
		/>
	);
};

export default Radio;
