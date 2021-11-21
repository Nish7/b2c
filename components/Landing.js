import { Box, Text } from '@chakra-ui/layout'
import RedHighlight from './TextStyles/RedHighlight'

function Landing() {
    return (
        <Box mt={10}>
            <Text
                fontSize="9rem"
                margin="0 auto"
                fontWeight="extrabold"
                letterSpacing="-3px"
                textAlign="center"
                lineHeight="1"
            >
                B2C
            </Text>
            <Text fontSize="md" textAlign="center" fontWeight={900}>
                at <RedHighlight>Indiana University</RedHighlight>
            </Text>
        </Box>
    )
}

export default Landing
