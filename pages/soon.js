import { Box, Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

function ourwork() {
    return (
        <>
            <NextSeo title="Coming Soon | B2C" />

            <Flex alignItems="center" height="60vh" justifyContent="center">
                <Heading m={5} textAlign="center" fontSize="7xl">
                    Coming soon.
                </Heading>
            </Flex>
        </>
    )
}

export default ourwork
