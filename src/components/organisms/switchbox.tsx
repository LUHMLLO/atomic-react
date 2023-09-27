import React from 'react';
import Text from '@/components/atoms/text';
import Switch from '../molecules/switch';

interface Props {
	checked?: boolean;
	className?: string;
	label?: string;
}

const Checkbox: React.FC<Props> = ({
	checked = false,
	className = '',
	label = '',
}) => {
	return (
		<fieldset
			className={`flex items-center gap-5xs min-w-max max-w-full ${className}`}>
			<Switch checked={checked} />
			<Text tag='label' text={label} className='flex-shrink-0 min-w-max' />
		</fieldset>
	);
};

export default Checkbox;
