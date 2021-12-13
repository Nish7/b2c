import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'

import '@fontsource/raleway/800.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import { useState } from 'react'
import theme from '@/styles/theme'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

function MyApp({ Component, pageProps }) {
    const [cursorHover, hover] = useState(false)

    return (
        <ChakraProvider theme={theme}>
            <Cursor hover={cursorHover} />
            <Navbar />
            <Box className="ee" minH="80vh">
                <Component {...pageProps} hover={hover} />
            </Box>
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp
