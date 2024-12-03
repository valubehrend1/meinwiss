import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const DonateButtonWrapper = styled('div')({
	position: 'fixed',
	bottom: 20,
	right: 20,
});

export const StyledButton = styled(Button)(({ theme }) => ({
	color: 'black',
	textTransform: 'capitalize',
	padding: '1rem 2.5rem',
	fontSize: '16px',
	'&:hover': {
		backgroundColor: `${theme.palette.secondary.main}cc`,
	},
}));

// DONATION BANNER STYLES

export const BannerContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	padding: theme.spacing(2),
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: theme.spacing(2),
}));

export const DonateTypography = styled(Typography)(() => ({
	padding: '0px',
	color: '#FFF',
	margin: '0px',
}));

export const BannerDonateButton = styled(Button)(({ theme }) => ({
	textTransform: 'capitalize',
	color: '#FFF',
	borderColor: '#FFF',
	'&:hover': {
		borderColor: theme.palette.secondary.main,
		color: theme.palette.secondary.main,
	},
}));