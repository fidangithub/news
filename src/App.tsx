import { ThemeProvider } from './context/theme';
import { AppLayout } from './views/layout/app';

export const App: React.FC = () => {
	return (
		<ThemeProvider>
			<AppLayout />
		</ThemeProvider>
	);
};
