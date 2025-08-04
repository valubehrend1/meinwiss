import AddIcon from '@mui/icons-material/Add';
import { StyledNewChatButton } from './styles';

const NewChatButton = () => (
    <StyledNewChatButton
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
    >
        + New chat
    </StyledNewChatButton>
);

export default NewChatButton;
