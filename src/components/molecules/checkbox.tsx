import React from 'react';
import Check from '@/components/atoms/check';
import Text from '@/components/atoms/text';

interface Props {
	text: string;
	checked?: boolean;
	className?: string;
}

const Checkbox: React.FC<Props> = (props) => {
	const { text, checked, className } = props;

	return (
		<fieldset
			className={`inline-flex items-center gap-5xs flex-shrink ${className}`}>
			<Check checked={checked} />
			<Text tag='label' text={text} />
		</fieldset>
	);
};

export default Checkbox;
