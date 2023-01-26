import React from 'react';
import { Typography } from 'antd';
import { StyledContent } from './style';
import { messages } from './messages';
import { Outlet } from 'react-router-dom';

const { Title } = Typography;

const SolidPrinciples = () => {
	return (
		<StyledContent>
			<Title>{messages.title}</Title>
			<Outlet />
		</StyledContent>
	);
};

export default SolidPrinciples;
