import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import { routes } from './routes';
import Sidebar from '../components/Sidebar';
import {
	StyledApplicationBody,
	StyledApplicationContentLayout,
	StyledApplicationLayout,
} from './styles';
import PrinciplesList from '../modules/SolidPrinciples/components/PrinciplesList';
import PrincipleRenderer from '../modules/SolidPrinciples/components/PrincipleRenderer';

const { Content } = Layout;

const ApplicationRouter = () => {
	return (
		<StyledApplicationLayout>
			<Header />
			<StyledApplicationBody hasSider>
				<Sidebar />
				<StyledApplicationContentLayout className="custom_scroll">
					<Content>
						<Routes>
							{/* {routes.map((r, i) => (
								<Route
									path={r.path}
									element={r.element}
									index={r.index}
									key={i}
								/>
							))} */}
							<Route path="/solid-principles">
								<Route index element={<PrinciplesList />} />
								<Route path=":pid" element={<PrincipleRenderer />} />
							</Route>
						</Routes>
					</Content>
				</StyledApplicationContentLayout>
			</StyledApplicationBody>
		</StyledApplicationLayout>
	);
};

export default ApplicationRouter;
