import { Button } from '@chakra-ui/button'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'

function Footer() {
    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                mx="auto"
                w="90%"
                position="relative"
                h="8vh"
            >
                <Flex alignItems="center">
                    <Text fontWeight="bold" fontSize="md" mr={3}>
                        Connect with us:
                    </Text>
                    <Button variant="ghost">
                        Facebook <Icon ml={2} as={FaFacebook} />
                    </Button>

                    <Button variant="ghost">
                        Instagram <Icon ml={2} as={FaInstagram} />
                    </Button>

                    <Button variant="ghost">
                        Mail <Icon ml={2} as={FaEnvelope} />
                    </Button>
                </Flex>

                <Button variant="outline">Work with us</Button>
            </Flex>
        </>
    )
}

export default Footer
