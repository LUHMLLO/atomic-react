import type React from 'react';

interface Props {
	alt?: string;
	className?: string;
	src?: string;
}

const Figure: React.FC<Props> = ({
	alt = '',
	className = '',
	src = '',
}) => {
	return (
		<figure
			className={`inline-flex items-center flex-shrink-0 overflow-hidden rounded-5xs ${className}`}>
			<img src={src} alt={alt} />
		</figure>
	);
};

export default Figure;
