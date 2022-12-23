import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { theme } from 'src/styles/theme';

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <MuiThemeProvider theme={theme}>
                <Component {...pageProps} />
            </MuiThemeProvider>
        </RecoilRoot>
    );
}

export default App;
