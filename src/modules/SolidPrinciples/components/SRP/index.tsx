import React from 'react';
import DocViewer from '../DocViewer';
import md from '../../docs/SRP.md';

const SRP = () => {
	return (
		<>
			<DocViewer source={md} />
		</>
	);
};

export default SRP;
