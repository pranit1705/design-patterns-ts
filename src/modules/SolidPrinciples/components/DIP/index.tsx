import React from 'react';
import DocViewer from '../DocViewer';
import md from '../../docs/DIP.md';

const DIP = () => {
	return (
		<>
			<DocViewer source={md} />
		</>
	);
};

export default DIP;
