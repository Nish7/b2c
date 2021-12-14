import { Flex } from '@chakra-ui/layout'
import NavLinks from './nav/NavLinks'
import Logo from './nav/Logo'

function Navbar() {
    return (
        <Flex
            h="12vh"
            w="80%"
            mx="auto"
            justifyContent="space-between"
            alignItems="center"
        >
            <Logo />
            <NavLinks />
        </Flex>
    )
}

export default Navbar
