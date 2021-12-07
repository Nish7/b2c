import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'

import '@fontsource/raleway/800.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import theme from '@/styles/theme'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <Box minH="80vh">
                <Component {...pageProps} />
            </Box>
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp
