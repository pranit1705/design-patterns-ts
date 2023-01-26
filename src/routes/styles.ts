import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledApplicationLayout = styled(Layout)``;

export const StyledApplicationBody = styled(Layout)`
	height: calc(100vh - 64px);
	.custom_scroll::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #f5f5f5;
	}

	.custom_scroll::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	.custom_scroll::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		background-color: #555;
	}
`;

export const StyledApplicationContentLayout = styled(Layout)`
	height: calc(100vh - 64px);
	overflow: auto;
`;
