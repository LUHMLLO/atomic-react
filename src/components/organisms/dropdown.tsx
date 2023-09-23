import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { useFloating, flip, offset, shift } from '@floating-ui/react';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';

interface Props {
	className?: string;
	filled?: boolean;
	flat?: boolean;
	leading_icon?: string;
	leading_icon_filled?: boolean;
	text?: string;
	children?: ReactNode;
}

const Dropdown: React.FC<Props> = ({
	className,
	filled,
	flat,
	leading_icon,
	leading_icon_filled,
	text,
}) => {
	const reference = useRef<HTMLDetailsElement | null>(null);
	const floating = useRef<HTMLUListElement | null>(null);

	const [floatingStyles, setFloatingStyles] = useState<React.CSSProperties>({
		position: 'absolute',
		visibility: 'hidden',
	});

	useEffect(() => {
		if (reference.current && floating.current) {
			const middleware = [
				flip({
					fallbackStrategy: 'bestFit',
					padding: 6,
				}),
				offset(6),
				shift({
					mainAxis: true,
					crossAxis: true,
				}),
			];

			const { styles } = useFloating(reference, floating, {
				placement: 'bottom',
				middleware,
				whileElementsMounted: (placement, styles) => {
					setFloatingStyles(styles);
				},
			});

			setFloatingStyles(styles);
		}
	}, [filled, flat]);

	return (
		<details
			className={`relative inline-flex flex-col ${className ? className : ''}`}>
			<summary
				ref={reference}
				className={`flex items-center gap-5xs min-w-full max-w-max cursor-pointer rounded-5xs ${
					filled ? 'bg-neutral-900' : ''
				} ${text && !flat ? 'px-sm py-xs' : ''} ${
					!text && !flat ? 'p-5xs' : ''
				}`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_filled} />
				)}
				{text && <Text tag='span' text={text} className='w-full' />}
				<Icon name='expand_more' />
			</summary>
			<ul
				ref={floating}
				className='flex flex-col gap-5xs p-5xs min-w-full max-w-max bg-neutral-900 rounded-5xs whitespace-nowrap'
				style={floatingStyles}>
				{children}
			</ul>
		</details>
	);
};

export default Dropdown;
