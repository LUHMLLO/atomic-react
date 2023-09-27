import React, { ReactNode } from 'react';
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
	children,
}) => {
	// const reference = useRef<HTMLDetailsElement | null>(null);
	// const floating = useRef<HTMLUListElement | null>(null);
	// const [floatingStyles, setFloatingStyles] = useState<React.CSSProperties>({});

	// useEffect(() => {
	// 	if (reference.current && floating.current) {
	// 		const referenceRect = reference.current.getBoundingClientRect();
	// 		const desiredStyles: React.CSSProperties = {
	// 			position: 'absolute',
	// 			top: `${referenceRect.bottom}px`,
	// 			left: `${referenceRect.left}px`,
	// 		};
	// 		setFloatingStyles(desiredStyles);
	// 	}
	// }, []);

	return (
		<details
			// ref={reference}
			className={`relative inline-flex flex-col gap-5xs ${className}`}>
			<summary
				className={`flex items-center gap-5xs min-w-full max-w-max cursor-pointer rounded-5xs ${
					filled ? 'bg-zinc-900' : ''
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
				// ref={floating}
				// style={floatingStyles}
				className={`absolute mt-5xs flex flex-col gap-5xs p-5xs min-w-full max-w-max bg-zinc-900 rounded-5xs whitespace-nowrap`}>
				{children}
			</ul>
		</details>
	);
};

export default Dropdown;
