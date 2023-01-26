import React from 'react';

export type RouteType = {
	path: string;
	element: JSX.Element | React.ReactNode | string;
	index?: boolean;
};

export type Routes = {
	path: string;
	element: JSX.Element | React.ReactNode | string;
	subRoutes?: RouteType[];
	index?: boolean;
};
