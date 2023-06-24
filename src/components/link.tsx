import { Theme, styled } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import {
	Link as ReactRouterLink,
	LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';

export type LinkProps = ReactRouterLinkProps & {
	link?: boolean;
	disabled?: boolean;
};

const Root = styled(ReactRouterLink)(({ theme }: { theme: Theme }) => ({
	textDecoration: 'none !important',
	color: theme.palette.text.secondary,
	fontSize: '0.875rem',
	fontWeight: 500,
	'&.underline': {
		display: 'flex',
		textDecoration: 'underline !important',
		color: theme.palette.primary.main,
	},
}));

export const Link: React.FC<LinkProps> = ({
	disabled,
	link,
	children,
	className,
	to,
	...props
}) => {
	return (
		<Root
			onClick={e => {
				if (disabled) {
					e.preventDefault();
				}
			}}
			className={clsx('root', link && 'underline', className)}
			to={to as any}
			{...props}
		>
			{children}
		</Root>
	);
};
