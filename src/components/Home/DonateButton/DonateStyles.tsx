import { styled } from '@mui/system';
import Button from '@mui/material/Button';

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