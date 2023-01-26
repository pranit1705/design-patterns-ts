import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const StyledHeader = styled(Header)`
	&& {
		background-color: #fff;
	}
	position: sticky;
	top: 0;
	z-index: 1;
	width: 100%;
`;
