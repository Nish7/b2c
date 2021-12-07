import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,

    colors: {
        primary: 'white',
        background: 'red',
    },
    fonts: {
        heading: 'Raleway',
        body: 'Inter',
    },
})
