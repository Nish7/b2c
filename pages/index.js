import { Flex } from '@chakra-ui/layout'
import Landing from '@/components/Landing'

export default function Home() {
    return (
        <>
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                h="70vh"
            >
                <Landing />
            </Flex>
        </>
    )
}
