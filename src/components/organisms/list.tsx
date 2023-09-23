import React, { ReactNode } from 'react';
import { allowedLists } from '@/commons/logic/atomicRules';

interface Props {
	tag: string;
	className?: string;
	children?: ReactNode;
}

const List: React.FC<Props> = ({ tag = '', className = '' }) => {
	if (!allowedLists.includes(tag)) {
		throw new Error(`Invalid or unauthorized tag provided: ${tag}`);
	}

	return React.createElement(tag, { className: className });
};

export default List;
