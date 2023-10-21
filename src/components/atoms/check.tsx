import React, { useState } from 'react';
import Styles from '@styles/modules/check.module.scss';

interface Props {
	checked?: boolean;
	className?: string;
	onChange?: (value: boolean) => void;
}

const Check: React.FC<Props> = ({
	checked = false,
	className = '',
	onChange,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = () => {
		const state = !isChecked;
		setIsChecked(state);

		if (onChange) {
			onChange(state);
		}
	};

	return (
		<input
			x-variant='check'
			type='checkbox'
			className={`${className} ${Styles}`}
			checked={isChecked}
			onChange={handleChange}
		/>
	);
};

export default Check;
