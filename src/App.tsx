import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';
import ApplicationRouter from './routes';

const App = () => {
	return (
		<BrowserRouter>
			<ApplicationRouter />
		</BrowserRouter>
	);
};

export default App;
