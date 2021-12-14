import { Flex, Box } from '@chakra-ui/layout'
import NavLinks from './nav/NavLinks'
import Logo from './nav/Logo'
import HamburgerMenu from './nav/HamburgerMenu'

function Navbar() {
    return (
        <Box>
            <Flex
                display={['none', 'none', 'flex']}
                h="12vh"
                w={{ sm: '100%', lg: '85%' }}
                mx="auto"
                justifyContent="space-between"
                alignItems="center"
            >
                <Logo />
                <NavLinks />
            </Flex>

            <HamburgerMenu />
        </Box>
    )
}

export default Navbar
