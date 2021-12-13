import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Link from 'next/link'

function Landing({ hover }) {
    return (
        <Box>
            <Box
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
            >
                <Heading
                    fontSize="8xl"
                    fontWeight={700}
                    margin="0 auto"
                    display="inline-block"
                    textAlign="center"
                    lineHeight="1.2"
                    w="full"
                >
                    B2C
                </Heading>

                <Text fontSize="md" fontWeight={500} textAlign="center">
                    Indiana University
                </Text>

                <Text
                    fontSize="md"
                    fontWeight={400}
                    textAlign="center"
                    mt={8}
                    mb={7}
                >
                    student-run sales experience organization affiliated <br />{' '}
                    with Impression Personalized
                </Text>
            </Box>

            <Flex justifyContent="space-evenly" alignItems="center">
                <Link href="/about-us">
                    <Button w="49%" mr={2}>
                        About Us
                    </Button>
                </Link>
                <Link href="/soon">
                    <Button w="49%">Our Work</Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Landing
