import SyntaxHighlighter, {
	SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter = ({
	children,
	style = atomOneDark,
	language = 'typescript',
	...rest
}: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter language={language} style={style} {...rest}>
			{children}
		</SyntaxHighlighter>
	);
};

export default Highlighter;
