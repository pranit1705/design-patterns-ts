import React from 'react';
import DocViewer from '../DocViewer';
import md from '../../docs/ISP.md';

const ISP = () => {
	return (
		<>
			<DocViewer source={md} />
		</>
	);
};

export default ISP;
