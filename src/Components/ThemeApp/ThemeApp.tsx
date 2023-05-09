import { useState, createContext, useContext, useMemo } from "react"
import { IconButton, ThemeProvider, createTheme, useTheme } from "@mui/material";
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { App } from "../../App";
// the context
export const ColorModeContext = createContext({
    toggleColorMode: () => { }
})
export const LangModeContext = createContext({
    toggleLangMode: () => { },
    state: 'english'
})

export const LightModeButton = () => {
    const theme = useTheme();
    // call the context value
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton
            onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ?
                <Brightness7OutlinedIcon />
                :
                <Brightness4OutlinedIcon />
            }
        </IconButton>
    )
}
export const LangModeButton = () => {
    // call the context value
    const langMode = useContext(LangModeContext);
    return (
        <IconButton
            onClick={langMode.toggleLangMode}>
           {langMode.state === 'english' ?
            'עברית'
            :
            'english'
            }
        </IconButton>
    )
}

export const ThemeApp = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [langModeState, setLangMode] = useState<'english' | 'עברית'>('עברית');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }), []);

    const langMode = useMemo(() => ({
        toggleLangMode: () => setLangMode((prevMode) => (prevMode === 'english' ? 'עברית' : 'english')),
        state: langModeState
    }), [langModeState])
    
    const theme = useMemo(() =>
        createTheme({
            palette: {
                background: { default: '#fff' },
                primary: {
                    light: '#808080',
                    main: '#ff0000',
                    dark: '#202020',
                    contrastText: '#606060'
                },
                mode
            }
        })
        , [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
        <LangModeContext.Provider value={langMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </LangModeContext.Provider>
        </ColorModeContext.Provider>
    )

}