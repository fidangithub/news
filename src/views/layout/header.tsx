import {
	Box,
	Button,
	ButtonBase,
	Hidden,
	IconButton,
	styled,
	Theme,
} from '@mui/material';
import { logo } from './../../config';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { useTheme } from '../../context/theme';
import { Link } from './../../components';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	zIndex: '2',
	marginBottom: theme.spacing(10),
	padding: theme.spacing(3, 6),
	background: theme.palette.background.default,
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(1, 2),
	},
	position: 'sticky',
	top: 0,
	borderBottom: theme.dark
		? '1px solid rgba(255, 255, 255, 0.1)'
		: '1px solid rgba(0, 0, 0, 0.1)',

	'& .icon-button-wrapper': {
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: '10px',
		width: 36,
		height: 36,
	},
	'& .logo-button': {
		display: 'flex',
		flex: 1,
	},
	'& .logo': {
		[theme.breakpoints.down('sm')]: {
			width: '40px',
			height: '40px',
		},
	},
	'& .links': {
		display: 'flex',
		alignItems: 'center',
		flex: 2,
		justifyContent: 'flex-end',
		'& > *': {
			marginLeft: theme.spacing(14),
		},
	},
	'& .action-buttons': {
		display: 'flex',
		flex: 1.5,
		justifyContent: 'flex-end',
		alignItems: 'center',
		'& > *': {
			marginLeft: theme.spacing(10),
		},
	},
	'& .button': {
		borderColor: `${theme.palette.text.secondary} !important`,
		color: theme.palette.text.secondary,
		'&:hover': {
			borderColor: theme.palette.text.secondary,
			backgroundColor: 'inherit',
		},
	},
}));

export const Header = () => {
	const { toggleTheme } = useTheme();
	return (
		<Root>
			<Link style={{ width: 'unset' }} to="/" className="logo-button">
				<ButtonBase disableRipple>
					<img className="logo" src={logo} alt="falkon logo" />
				</ButtonBase>
			</Link>
			<Hidden mdDown>
				<Box className="links">
					<Link to="/home">Home</Link>
					<Link to="/in-depth">In depth</Link>
					<Link to="/sign-up">Sign up</Link>
				</Box>
			</Hidden>
			<Box className="action-buttons">
				<Box className="icon-button-wrapper">
					<IconButton onClick={toggleTheme} size="small" className="button">
						<NightlightOutlinedIcon />
					</IconButton>
				</Box>
				<Hidden smDown>
					<Link to="/sign-in">
						<Button variant="outlined" color="primary" className="button">
							Sign in
						</Button>
					</Link>
				</Hidden>
			</Box>
		</Root>
	);
};
