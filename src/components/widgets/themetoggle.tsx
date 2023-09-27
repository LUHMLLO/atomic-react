import React, { useState } from 'react';
import Icon from '../atoms/icon';

interface Props {
	checked?: boolean;
}

const ThemeToggle: React.FC<Props> = ({ checked = false }) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<span
			className={`cursor-pointer ${
				isChecked ? 'text-amber-300' : 'text-slate-400'
			}`}
			onClick={() => setIsChecked(!isChecked)}>
			{isChecked ? (
				<Icon name='light_mode' className='text-3xl' />
			) : (
				<Icon name='dark_mode' className='text-3xl' />
			)}
		</span>
	);
};

export default ThemeToggle;
