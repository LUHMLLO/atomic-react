import type React from 'react';

interface Props {
	alt?: string;
	className?: string;
	src?: string;
	onClick?: () => void;
}

const Figure: React.FC<Props> = ({
	alt = '',
	className = '',
	src = '',
	onClick,
}) => {
	return (
		<figure
			className={`inline-flex items-center flex-shrink-0 overflow-hidden rounded-5xs ${className}`}
			onClick={onClick}>
			<img src={src} alt={alt} className='inset-0 object-cover w-full h-full' />
		</figure>
	);
};

export default Figure;
