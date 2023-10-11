import React from 'react';
import { useTranslation } from 'react-i18next';

export function Greeting() {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t('greeting')}</h1>
		</div>
	);
}

export function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div>
			<button onClick={() => changeLanguage('en')}>English</button>
			<button onClick={() => changeLanguage('fr')}>Français</button>
		</div>
	);
}
