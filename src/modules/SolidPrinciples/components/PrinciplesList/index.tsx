import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, List } from 'antd';
import { principles } from '../../constants';
import { messages } from '../../messages';

const { Text, Paragraph } = Typography;

const PrinciplesList = () => {
	return (
		<>
			<Paragraph>{messages.infoParagraph}</Paragraph>
			<List
				dataSource={principles}
				split={false}
				size="large"
				renderItem={(item) => (
					<List.Item key={item.key}>
						<Link to={item.link}>
							<Text>{item.title}</Text>
						</Link>
					</List.Item>
				)}
			/>
		</>
	);
};

export default PrinciplesList;
