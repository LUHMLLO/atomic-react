import React, { useState } from 'react';
import Icon from '@/components/atoms/icon';

interface Props {
	checked?: boolean;
	className?: string;
	icon?: string;
	icon_fill?: boolean;
}

const Checkbox: React.FC<Props> = ({ checked, className, icon, icon_fill }) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<fieldset
			className={`relative inline-flex items-center w-5xl bg-neutral-900 rounded-5xl isolate overflow-hidden ${className}`}>
			<input
				type='checkbox'
				className={`absolute inset-0 z-10 before:invisible before:absolute before:inset-0 appearance-none ${className}`}
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
			<label className='flex flex-grow p-9xs'>
				<Icon
					name={icon ? icon : 'check'}
					filled={icon_fill}
					className='rounded-5xl text-lg'
				/>
			</label>
		</fieldset>
	);
};

export default Checkbox;
