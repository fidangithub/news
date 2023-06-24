import { CssBaseline, styled } from '@mui/material';
import { Theme } from '@mui/system';
import { headerHeight } from './../../config';
import { Header } from './header';
import './app.css';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useTheme } from '../../context/theme';
import customTheme from './../../theme';
import { AppRouter } from '../../routes/app-route';

const Root = styled('div')(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	'& .main-wrapper': {
		display: 'flex',
		height: '100%',
		flex: '1 1 auto',
	},
	'& .content': {
		width: '100%',
		flex: '1 1 auto',
	},
	'& .main': {
		paddingBottom: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('md')]: {
			minHeight: `calc(100vh - ${headerHeight}px)`,
		},
		alignItems: 'center',
	},
}));

export const AppLayout = () => {
	const { theme } = useTheme();
	const muiTheme = customTheme(theme);

	return (
		<MuiThemeProvider theme={muiTheme}>
			<Root>
				<CssBaseline />
				<Header />
				<div className="main-wrapper">
					<div className="content">
						<div className="main">
							<AppRouter />
						</div>
					</div>
				</div>
			</Root>
		</MuiThemeProvider>
	);
};
