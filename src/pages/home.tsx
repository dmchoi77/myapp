import { Box } from '@mui/system';
import { useEffect } from 'react';
import MasterLayout from 'src/components/layout/masterLayout';
import { useNaverMap } from '../hooks/useNaverMap';
import Navigator from '../components/Navigator/navigator';
import { Grid } from '@mui/material';

const Home = () => {
    const { map, startInfo } = useNaverMap({
        mapId: 'map',
    });

    useEffect(() => {
        if (!map || !startInfo.marker) return;
        startInfo.marker.setMap(map);
    }, [map, startInfo.marker]);

    return (
        <MasterLayout>
            <Grid
                container
                sx={{
                    height: '83%',
                    // flexDirection: 'row',
                    flexWrap: 'nowrap',
                    '@media(max-width: 1024px)': {
                        height: 'calc(93% + 40px)',
                    },
                }}
            >
                <Navigator />
                <Box
                    id='map'
                    sx={{
                        width: '100%',
                        // height: '83%',
                        // '@media(max-width: 1024px)': {
                        //     height: 'calc(83% + 40px)',
                        // },
                    }}
                ></Box>
            </Grid>
        </MasterLayout>
    );
};
export default Home;
