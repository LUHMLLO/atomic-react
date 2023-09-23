import React from 'react';

interface Props {
	alt?: string;
	className?: string;
	src?: string;
}

const Figure: React.FC<Props> = (props) => {
	const { alt, className, src } = props;

	return (
		<figure
			className={`inline-flex items-center flex-shrink-0 overflow-hidden rounded-5xs ${className}`}>
			<img src={src} alt={alt} />
		</figure>
	);
};

export default Figure;
