import React, { useState } from 'react';
import Styles from '@/commons/styles/modules/check.module.scss';

interface Props {
	checked?: boolean;
	className?: string;
	value?: string | number;
}

const Check: React.FC<Props> = ({ checked = false, className = '', value }) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			x-variant='check'
			type='checkbox'
			className={`${className} ${Styles}`}
			checked={isChecked}
			value={value}
			onChange={() => setIsChecked(!isChecked)}
		/>
	);
};

export default Check;
