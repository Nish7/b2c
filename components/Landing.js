import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Link from 'next/link'

function Landing({ hover }) {
    return (
        <Box w={['90%', '90%', 'auto']}>
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
                    student-run sales experience organisation affiliated <br />
                    with Impression Personalized
                </Text>
            </Box>

            <Flex
                justifyContent="space-evenly"
                alignItems="center"
                flexDir={['column', 'column', 'row']}
            >
                <Link href="/about-us">
                    <Button
                        w={['full', '49%', '49%']}
                        mr={[0, 0, 2]}
                        mb={[3, 3, 0]}
                    >
                        About Us
                    </Button>
                </Link>
                <Link href="/soon">
                    <Button w={['full', '49%', '49%']}>Our Work</Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Landing
