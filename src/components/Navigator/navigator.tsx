import { Container } from '@mui/material';

const Navigator: React.FC = () => {
    return (
        <Container
            sx={{
                width: '500px',
                position: 'relative',
                background: 'transparent',
                padding: '0px !important',
                zIndex: 1,
                boxShadow: '0 0 5px 0 rgb(0 0 0 / 20%), 5px 0 15px 0 rgb(0 0 0 / 10%)',
            }}
        ></Container>
    );
};

export default Navigator;
