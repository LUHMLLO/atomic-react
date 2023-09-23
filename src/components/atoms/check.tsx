import React, { useState } from 'react';
import Styles from '@/commons/styles/components/check.module.scss';

interface Props {
	checked?: boolean;
	className?: string;
}

const Check: React.FC<Props> = ({ checked = false, className = '' }) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			type='checkbox'
			className={`${className} ${Styles}`}
			checked={isChecked}
			onChange={() => setIsChecked(!isChecked)}
		/>
	);
};

export default Check;
