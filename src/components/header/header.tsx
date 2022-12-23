import { Box, IconButton, styled, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: #cc56f7;

    @media (max-width: 1024px) {
        /* height: 10%; */

        p {
            font-size: 14px;
        }
    }
`;

const Header: React.FC = () => {
    return (
        <Container>
            <Typography fontSize={20} color='#ffff' align='center'>
                제목제목제목
            </Typography>
        </Container>
    );
};

export default Header;
