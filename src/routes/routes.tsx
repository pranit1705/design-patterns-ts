import React from 'react';
import SolidPrinciples from '../modules/SolidPrinciples';
import DIP from '../modules/SolidPrinciples/components/DIP';
import ISP from '../modules/SolidPrinciples/components/ISP';
import LSP from '../modules/SolidPrinciples/components/LSP';
import OCP from '../modules/SolidPrinciples/components/OCP';
import SRP from '../modules/SolidPrinciples/components/SRP';
import { Routes } from './types';

export const routes: Routes[] = [
	{
		path: '/',
		element: <></>,
	},
	{
		path: '/solid-principles',
		element: <SolidPrinciples />,
	},
	{
		path: '/solid-principles/srp',
		element: <SRP />,
	},
	{
		path: '/solid-principles/ocp',
		element: <OCP />,
	},
	{
		path: '/solid-principles/lsp',
		element: <LSP />,
	},
	{
		path: '/solid-principles/isp',
		element: <ISP />,
	},
	{
		path: '/solid-principles/dip',
		element: <DIP />,
	},
	{
		path: '/design-patterns',
		element: <div>Design Patterns</div>,
	},
];
