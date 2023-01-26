import React from 'react';
import DocViewer from '../DocViewer';
import md from '../../docs/LSP.md';

const LSP = () => {
	return (
		<>
			<DocViewer source={md} />
		</>
	);
};

export default LSP;
