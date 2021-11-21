import { Box } from '@chakra-ui/layout'
import Landing from '@/components/Landing'
import BodyInfo from '@/components/BodyInfo'

export default function Home() {
    return (
        <Box mx="10%" bg="background">
            <Landing />
            <BodyInfo />
        </Box>
    )
}
