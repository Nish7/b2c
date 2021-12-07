import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

function aboutUs() {
    return (
        <Box mt={10} mx="auto" w="59%">
            <Heading fontSize="5xl">About us</Heading>
            <Flex mt={10}>
                <Text>
                    B to C is a <b>student-run organization</b> at IU that is
                    affiliated with companies such as
                    <b> Impression Personalized</b>, a company that sells
                    personalized gifts to your loved ones.
                </Text>
                <Text ml={5}>
                    Our primary goal is to provide our members with{' '}
                    <b>real-world sales experience </b>by providing them with
                    the opportunity to promote products of affiliated companies.
                </Text>
            </Flex>

            {/* <ImageSlider />  */}
        </Box>
    )
}

export default aboutUs
