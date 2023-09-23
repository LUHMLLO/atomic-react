import React from 'react';
import { allowedScales, allowedTextTags } from '@/commons/logic/atomicRules';

interface Props {
	tag: string;
	text: string;
	className?: string;
	scale?: string;
}

const Text: React.FC<Props> = ({
	tag,
	text,
	className = '',
	scale = '',
}) => {
	if (!allowedTextTags.includes(tag)) {
		throw new Error(`Invalid or unauthorized tag provided: ${tag}`);
	}

	const variantClass =
		scale && allowedScales.includes(scale) ? `text-${scale}` : '';

	if (scale && !variantClass) {
		throw new Error(`Invalid or unauthorized variant provided: ${scale}`);
	}

	return React.createElement(
		tag,
		{ className: `${variantClass} ${className}` },
		text
	);
};

export default Text;
