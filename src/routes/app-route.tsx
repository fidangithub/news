import { Routes, Route } from 'react-router-dom';
import { Home } from '../views';
import { NewsDetail } from '../views/news-detail';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/news/:id" element={<NewsDetail />}></Route>
		</Routes>
	);
};
