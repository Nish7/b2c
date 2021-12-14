import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
        global: {
            '*': {
                cursor: 'none',
            },
            '.cursor': {
                position: 'fixed',
                left: 0,
                top: 0,
                width: '20px',
                height: '20px',
                borderRadius: '80%',
                mixBlendMode: 'difference',
                border: '1px solid white',
                zIndex: 100,
                pointerEvents: 'none',
                transition:
                    'width 0.3s, height 0.3s, background 0.5s ease-in-out',
            },
            '.bigCursor': {
                width: '100px',
                height: '100px',
                border: 'none',
                backgroundColor: 'gray.200',
                mixBlendMode: 'difference',
            },
        },
    },
    colors: {
        primary: 'white',
        background: 'red',
    },
    fonts: {
        heading: 'Raleway',
        body: 'Inter',
    },
})
