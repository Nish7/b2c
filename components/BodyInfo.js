import { Box, Text } from '@chakra-ui/layout'
import RedHighlight from './TextStyles/RedHighlight'

function BodyInfo() {
    return (
        <Box mt={24}>
            <Text w="40%" fontSize="lg" fontWeight={700} lineHeight="30px">
                B to C is a{' '}
                <RedHighlight>student-run organization</RedHighlight> at IU that
                is affiliated with companies such as{' '}
                <RedHighlight>Impression Personalized</RedHighlight>, a company
                that sells personalized gifts to your loved ones. Our primary
                goal is to provide our members with{' '}
                <RedHighlight>real-world sales experience</RedHighlight> by
                providing them with the opportunity to promote products of
                affiliated companies, such as Impression Personalized.
            </Text>
        </Box>
    )
}

export default BodyInfo
