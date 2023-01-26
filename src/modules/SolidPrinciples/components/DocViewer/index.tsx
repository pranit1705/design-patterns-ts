import React from 'react';
import { Layout } from 'antd';
import { MDPreview } from '../../../../components/MDEditor';

const { Content } = Layout;

const DocViewer = ({ source }: { source: string }) => {
	return (
		<Content style={{ padding: 24 }}>
			<MDPreview source={source} style={{ padding: 24 }} />
		</Content>
	);
};

export default DocViewer;
