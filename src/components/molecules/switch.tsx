import React, { useState } from 'react';
import Styles from '@/commons/styles/components/switch.module.scss';

interface Props {
	checked?: boolean;
	className?: string;
	icon?: string;
}

const Checkbox: React.FC<Props> = ({
	checked = false,
	className = '',
	icon,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			x-variant='switch'
			x-icon={icon}
			type='checkbox'
			className={`${className}`}
			style={Styles}
			checked={isChecked}
			onChange={() => setIsChecked(!isChecked)}
		/>
	);
};

export default Checkbox;
