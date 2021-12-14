import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import {
    Button,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Drawer,
    useDisclosure,
    DrawerCloseButton,
    Text,
    VStack,
    Icon,
} from '@chakra-ui/react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'
import ColorModeBtn from './ColorModeBtn'

function HamburgerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            w="90%"
            h="10vh"
            mx="auto"
            display={['flex', 'flex', 'none']}
            justifyContent="space-between"
            alignItems="center"
        >
            <Logo />

            <Button variant="ghost" onClick={onOpen}>
                <HamburgerIcon />
            </Button>

            <Drawer size="lg" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <Button variant="ghost" onClick={onClose}>
                            <Logo />
                        </Button>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={3} align="start">
                            <Link href="/soon">
                                <Button variant="ghost" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        Our work
                                    </Text>
                                </Button>
                            </Link>

                            <Link href="/soon">
                                <Button variant="ghost" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        Events
                                    </Text>
                                </Button>
                            </Link>

                            <Link href="/about-us">
                                <Button variant="ghost" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        About us
                                    </Text>
                                </Button>
                            </Link>

                            <Link href="/the-team">
                                <Button variant="ghost" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        The team
                                    </Text>
                                </Button>
                            </Link>

                            <Link href="/the-team">
                                <Button variant="outline" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        Join us
                                    </Text>
                                </Button>
                            </Link>

                            <Link href="/the-team">
                                <Button variant="outline" onClick={onClose}>
                                    <Text fontSize="lg" fontWeight={600}>
                                        Work with us
                                    </Text>
                                </Button>
                            </Link>

                            <Flex alignItems="center">
                                <ColorModeBtn />

                                <Button variant="ghost">
                                    <Icon ml={2} as={FaFacebook} />
                                </Button>

                                <Button variant="ghost">
                                    <Icon ml={2} as={FaInstagram} />
                                </Button>

                                <Button variant="ghost">
                                    <Icon ml={2} as={FaLinkedin} />
                                </Button>

                                <Button variant="ghost">
                                    <Icon ml={2} as={FaEnvelope} />
                                </Button>
                            </Flex>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default HamburgerMenu
