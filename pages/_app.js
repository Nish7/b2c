import { ChakraProvider } from '@chakra-ui/react'

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
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp
