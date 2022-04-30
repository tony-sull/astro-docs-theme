export function getLanguageFromURL(pathname: string, langPathRegex: RegExp) {
	const langCodeMatch = pathname.match(langPathRegex);
	return langCodeMatch ? langCodeMatch[1] : 'en';
}