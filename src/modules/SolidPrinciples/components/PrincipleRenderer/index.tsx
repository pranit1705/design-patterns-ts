import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import DocViewer from '../DocViewer';
import { principles } from './constants';

type QueryParam = {
	pid: string;
};

const PrincipleRenderer = () => {
	const { pid } = useParams<QueryParam>();

	const principleSource: string = useMemo(
		() => (pid ? principles[pid] : ''),
		[pid]
	);
	return <DocViewer source={principleSource} />;
};

export default PrincipleRenderer;
