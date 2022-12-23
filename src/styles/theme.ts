import { createTheme } from '@mui/material';
import { palette } from './palette';

export const theme = createTheme({
    palette: palette,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                fontFamily: 'Noto Sans KR',
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    height: 72,
                },
            },
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    height: 0,
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: 2,
                    marginRight: 0,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: 6,
                    color: '#b3b3b3',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 32,
                    fontFamily: 'Noto Sans KR',
                    boxShadow: 'none',
                },
                containedPrimary: {
                    background: '#E30613',
                    '&:hover': { background: '#A1050E' },
                },
            },
            defaultProps: {
                disableFocusRipple: true,
                disableRipple: true,
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Noto Sans KR',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: 'Noto Sans KR',
                    '.Mui-disabled': {
                        background: '#E6E6E6',
                        borderRadius: '6px',
                        color: '#999999',
                        WebkitTextFillColor: '#000000 !important',
                    },
                    borderRadius: '6px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Noto Sans KR',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: { fontFamily: 'Noto Sans KR', borderRadius: '6px' },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: { borderTop: '2px solid #000' },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: { borderBottom: '1px solid #B3B3B3' },
            },
        },
    },
});
