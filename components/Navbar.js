import { Button } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/layout'

function Navbar() {
    return (
        <Flex
            h="12vh"
            w="80%"
            mx="auto"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text fontFamily="raleway" fontWeight={700} fontSize="2xl">
                B to C
            </Text>

            <Flex
                w="45%"
                // border="1px red solid"s
                justifyContent="space-around"
                alignItems="center"
            >
                <Button variant="ghost">
                    <Text fontSize="md" fontWeight={600}>
                        Our work
                    </Text>
                </Button>

                <Button variant="ghost">
                    <Text fontSize="md" fontWeight={600}>
                        Events
                    </Text>
                </Button>

                <Button variant="ghost">
                    <Text fontSize="md" fontWeight={600}>
                        About us
                    </Text>
                </Button>

                <Button variant="ghost">
                    <Text fontSize="md" fontWeight={600}>
                        The team
                    </Text>
                </Button>

                <Button ml={2} variant="outline">
                    Join us
                </Button>
            </Flex>

            {/* <Box>
                <Button mr={5} variant="outline">
                    Work with us
                </Button>
                <Button>
                    <HamburgerIcon />
                </Button>
            </Box> */}
        </Flex>
    )
}

export default Navbar
