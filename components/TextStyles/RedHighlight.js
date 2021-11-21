import { Text } from '@chakra-ui/layout'

function RedHighlight({ children, props }) {
    return (
        <Text {...props} display="inline-block" color="red.600">
            {children}
        </Text>
    )
}

export default RedHighlight
