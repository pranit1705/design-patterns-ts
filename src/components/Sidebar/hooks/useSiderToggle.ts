import { useState } from 'react';

export const useSiderToggle = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = (value: boolean) => setCollapsed(value);

	return {
		collapsed,
		onCollapse,
	};
};
