import React from 'react';
import { Layout } from 'antd';
import { MDPreview } from '../../../../components/MDEditor';
import md from '../../docs/OCP.md';

const { Content } = Layout;
const OCP = () => {
	return (
		<>
			<Content style={{ padding: 24 }}>
				<MDPreview source={md} style={{ padding: 24 }} />
			</Content>
		</>
	);
};

export default OCP;
