import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { Icon, useMediaQuery } from '@chakra-ui/react'

function Footer() {
    const [isLargerThan425] = useMediaQuery('(min-width: 425px)')

    return (
        <>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                mx="auto"
                w={['100%', 'full', '75%']}
                position="relative"
                h="7vh"
            >
                <Flex
                    alignItems="center"
                    mx={['auto', 'auto', '0']}
                    flexWrap="wrap"
                >
                    <Button variant="ghost">
                        {isLargerThan425 && 'Facebook'}
                        <Icon ml={2} as={FaFacebook} />
                    </Button>

                    <Button variant="ghost">
                        {isLargerThan425 && 'Instagram'}
                        <Icon ml={2} as={FaInstagram} />
                    </Button>

                    <Button variant="ghost">
                        {isLargerThan425 && 'LinkedIn'}
                        <Icon ml={2} as={FaLinkedin} />
                    </Button>

                    <Button variant="ghost">
                        {isLargerThan425 && 'Mail'}
                        <Icon ml={2} as={FaEnvelope} />
                    </Button>
                </Flex>

                <Button
                    display={['none', 'none', 'inline-block']}
                    variant="outline"
                >
                    Work with us
                </Button>
            </Flex>
        </>
    )
}

export default Footer
