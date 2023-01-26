import React from 'react';
import { Menu } from 'antd';
import { menuItems } from './constants';
import { StyledSider } from './style';
import { useSiderToggle } from './hooks/useSiderToggle';

const Sidebar = () => {
	const { collapsed, onCollapse } = useSiderToggle();
	return (
		<StyledSider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<Menu mode="inline" items={menuItems} theme="dark" />
		</StyledSider>
	);
};

export default Sidebar;
