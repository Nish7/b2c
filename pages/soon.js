import { Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

function soon({ hover }) {
    return (
        <>
            <NextSeo title="Coming Soon | B2C" />

            <Flex alignItems="center" height="60vh" justifyContent="center">
                <Heading
                    onMouseEnter={() => hover(true)}
                    onMouseLeave={() => hover(false)}
                    m={5}
                    textAlign="center"
                    fontSize="7xl"
                >
                    Coming soon.
                </Heading>
            </Flex>
        </>
    )
}

export default soon
