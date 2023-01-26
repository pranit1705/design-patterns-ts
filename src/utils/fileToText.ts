import { readFileSync } from 'fs';

export const getTextFromFile = (filePath: string): string => {
	const text = readFileSync(filePath);

	return text.toString();
};
