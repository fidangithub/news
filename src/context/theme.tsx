/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext } from 'react';
import { useLocalStorage } from 'react-use';

type ThemeContextProps = {
	theme?: 'light' | 'dark';
	toggleTheme: () => void;
	isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleTheme: () => {},
	isDarkMode: false,
});
export const useTheme = (): ThemeContextProps =>
	useContext<ThemeContextProps>(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
		'@Theme',
		'light',
		{
			raw: true,
		},
	);

	const isDarkMode = theme === 'dark';
	const toggleTheme = (): void => setTheme(isDarkMode ? 'light' : 'dark');

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
				isDarkMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
