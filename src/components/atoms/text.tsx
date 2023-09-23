import React from 'react';

interface Props {
	tag: string;
	text: string;
	className?: string;
	scale?: string;
}

const allowedScales = ['xs', 'sm', 'md', 'lg', 'xl']; // Define your allowed scales
const allowedTextTags = [
	'span',
	'div',
	'p',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
]; // Define your allowed text tags

const Text: React.FC<Props> = (props) => {
	const { tag, text, className, scale } = props;

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
