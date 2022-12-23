import { BottomNavigation, BottomNavigationAction, Box, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

const Container = styled(Box)`
    width: 100%;
    height: 7%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #e6e6e6;
`;

const Footer = () => {
    const [value, setValue] = useState(0);
    console.log('🚀 ~ file: Footer.tsx:15 ~ Footer ~ value', value);

    return (
        <Container>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    '.Mui-selected': {
                        color: '#cc56f7 !important',
                    },
                }}
            >
                <BottomNavigationAction label='홈' icon={<HomeIcon />} onClick={() => {}} />
                <BottomNavigationAction label='위시리스트' icon={<FavoriteIcon />} onClick={() => {}} />
                <BottomNavigationAction label='내 위치' icon={<LocationOnIcon />} onClick={() => {}} />
            </BottomNavigation>
        </Container>
    );
};

export default Footer;
