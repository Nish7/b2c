import { Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

function Logo() {
    return (
        <Link href="/">
            <Button variant="ghost">
                <Text fontFamily="raleway" fontWeight={700} fontSize="xl">
                    B2C
                </Text>
            </Button>
        </Link>
    )
}

export default Logo
