import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

function Landing() {
    return (
        <Box>
            <Heading
                fontSize="8xl"
                fontWeight={700}
                margin="0 auto"
                textAlign="center"
                lineHeight="1.2"
                // letterSpacing="8px"
            >
                B to C.
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
                student-run marketing organization affiliated <br /> with
                Impression Personalized
            </Text>

            <Flex justifyContent="space-evenly" alignItems="center">
                <Button w="49%" mr={2}>
                    About Us
                </Button>
                <Button w="49%">Our Work</Button>
            </Flex>
        </Box>
    )
}

export default Landing
