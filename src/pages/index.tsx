import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import MasterLayout from '~/src/components/layout/masterLayout';
import { useNaverMap } from 'src/hooks/useNaverMap';
import Navigator from '../components/Navigator/navigator';

const Home: NextPage = () => {
    const { map, startInfo } = useNaverMap({
        mapId: 'map',
    });

    useEffect(() => {
        if (!map || !startInfo.marker) return;
        startInfo.marker.setMap(map);
    }, [map, startInfo.marker]);

    return (
        <MasterLayout>
            <Navigator />
            <Box
                id='map'
                sx={{
                    width: '100%',
                    height: '83%',
                    '@media(max-width: 1024px)': {
                        height: 'calc(83% + 40px)',
                    },
                }}
            ></Box>
        </MasterLayout>
    );
};

export default Home;
