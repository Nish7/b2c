import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useColorMode } from '@chakra-ui/color-mode'

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            h="12vh"
            w="80%"
            mx="auto"
            justifyContent="space-between"
            alignItems="center"
        >
            <Link href="/">
                <Button variant="ghost">
                    <Text fontFamily="raleway" fontWeight={700} fontSize="xl">
                        B2C
                    </Text>
                </Button>
            </Link>

            <Flex
                w="45%"
                // border="1px red solid"s
                justifyContent="space-around"
                alignItems="center"
            >
                <Link href="/soon">
                    <Button variant="ghost">
                        <Text fontSize="md" fontWeight={600}>
                            Our work
                        </Text>
                    </Button>
                </Link>

                <Link href="/soon">
                    <Button variant="ghost">
                        <Text fontSize="md" fontWeight={600}>
                            Events
                        </Text>
                    </Button>
                </Link>

                <Link href="/about-us">
                    <Button variant="ghost">
                        <Text fontSize="md" fontWeight={600}>
                            About us
                        </Text>
                    </Button>
                </Link>

                <Link href="/team">
                    <Button variant="ghost">
                        <Text fontSize="md" fontWeight={600}>
                            The team
                        </Text>
                    </Button>
                </Link>

                <Button onClick={toggleColorMode} variant="ghostly">
                    {colorMode === 'light' ? (
                        <Icon color="gray.400" as={MoonIcon} />
                    ) : (
                        <Icon color="gray.400" as={SunIcon} />
                    )}
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
