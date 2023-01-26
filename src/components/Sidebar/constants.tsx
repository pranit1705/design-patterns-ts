import React from 'react';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import {
	CheckCircleOutlined,
	ClusterOutlined,
	HomeOutlined,
	StopOutlined,
} from '@ant-design/icons';

export const menuItems: MenuProps['items'] = [
	{
		label: 'Home',
		key: 'home',
		icon: <HomeOutlined />,
	},
	{
		label: <Link to="/solid-principles">SOLID Principles</Link>,
		key: 'solid_principles',
		icon: <ClusterOutlined />,
		// children: [
		// 	{
		// 		label: <Link to="/solid-principles/srp">SRP</Link>,
		// 		key: 'solid_principles_srp',
		// 	},
		// 	{
		// 		label: <Link to="/solid-principles/ocp">OCP</Link>,
		// 		key: 'solid_principles_ocp',
		// 	},
		// 	{
		// 		label: <Link to="/solid-principles/lsp">LSP</Link>,
		// 		key: 'solid_principles_lsp',
		// 	},
		// 	{
		// 		label: <Link to="/solid-principles/isp">ISP</Link>,
		// 		key: 'solid_principles_isp',
		// 	},
		// 	{
		// 		label: <Link to="/solid-principles/dip">DIP</Link>,
		// 		key: 'solid_principles_dip',
		// 	},
		// ],
	},
	{
		label: 'Design Patterns',
		key: 'design_patterns',
		icon: <CheckCircleOutlined />,
	},
	{
		label: 'Anti Patterns',
		key: 'anti_patterns',
		icon: <StopOutlined />,
	},
];
