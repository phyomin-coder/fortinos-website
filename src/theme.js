import { createTheme } from '@mui/material/styles'


const theme = createTheme({
    palette: {
        primary: {
            main: '#0b5cff'
        },
        secondary: {
            main: '#00bfa6'
        }
    },
    components: {
        // small example customization
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        }
    }
})


export default theme