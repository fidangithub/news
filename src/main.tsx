import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Ooops...</h1>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'news/:id',
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
