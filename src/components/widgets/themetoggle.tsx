import React, { useState } from 'react';
import Icon from '../atoms/icon';

interface Props {
	checked?: boolean;
}

const ThemeToggle: React.FC<Props> = ({ checked = false }) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<span
			className={`inline-flex cursor-pointer text-amber-300 p-5xs`}
			onClick={() => setIsChecked(!isChecked)}>
			{isChecked ? (
				<Icon name='light_mode' filled />
			) : (
				<Icon name='dark_mode' filled />
			)}
		</span>
	);
};

export default ThemeToggle;
