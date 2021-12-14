import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import ColorModeBtn from './ColorModeBtn'

function NavLinks() {
    return (
        <Flex
            w={{ sm: '60%', md: '60%', lg: '45%' }}
            justifyContent="space-around"
            alignItems="center"
        >
            <NavLink to="Our work" soon />
            <NavLink to="Events" soon />
            <NavLink to="About us" />
            <NavLink to="The team" />

            <ColorModeBtn />

            <Button ml={2} variant="outline">
                Join us
            </Button>
        </Flex>
    )
}

function NavLink({ to, soon }) {
    return (
        <Link href={!soon ? to.toLowerCase().split(' ').join('-') : '/soon'}>
            <Button variant="ghost">
                <Text fontSize="md" fontWeight={600}>
                    {to}
                </Text>
            </Button>
        </Link>
    )
}

export default NavLinks
