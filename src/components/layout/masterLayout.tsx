import { Box, styled } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../header/header';

interface IProps {
    children: JSX.Element[] | JSX.Element;
}

const Container = styled(Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background: #f2f2f2;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

const Body = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    justify-content: flex-start;
`;

const MasterLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Container>
            <Body>
                <Header />
                {children}
                <Footer />
            </Body>
        </Container>
    );
};

export default React.memo(MasterLayout);
