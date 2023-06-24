import { createTheme, Theme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import { Theme as ThemeEnum } from './enum';

const breakpoints = createBreakpoints({});

const theme = (mode: 'dark' | 'light' | undefined): Theme => {
	const isDarkMode = mode === ThemeEnum.Dark;
	return createTheme({
		dark: isDarkMode,
		spacing: 8,
		breakpoints,
		shape: { borderRadius: 10 },
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					html: {
						fontSize: 16,
						[breakpoints.down('sm')]: {
							fontSize: 15,
						},
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 10,
						textTransform: 'none',
						padding: '6px 20px',
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#1F1F1F',
					},
				},
			},
		},
		palette: {
			mode,
			text: {
				primary: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
			},
			background: {
				default: isDarkMode ? '#1F1F1F' : 'rgba(255, 255, 255, 1)',
			},
		},
		typography: {
			fontFamily: ['Poppins', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
				',',
			),

			body2: {
				fontSize: '0.875rem',
				fontWeight: 400,
			},
			h1: {
				fontSize: '2.275rem',
				fontWeight: 600,
			},
			h2: {
				fontSize: '1.625rem',
				fontWeight: 600,
			},
			h3: {
				fontSize: '1.375rem',
				fontWeight: 600,
			},
			h4: {
				fontSize: '1.25rem',
				fontWeight: 600,
			},
			h5: {
				fontSize: '1rem',
				fontWeight: 600,
			},
			h6: {
				fontSize: '0.875rem',
				fontWeight: 500,
			},
		},
	});
};

declare module '@mui/material/styles' {
	interface Theme {
		dark: boolean;
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		dark?: boolean;
	}
}

export default theme;
