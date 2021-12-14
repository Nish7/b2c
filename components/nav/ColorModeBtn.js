import { useColorMode, Icon } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'

function ColorModeBtn() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode} variant="ghostly">
            {colorMode === 'light' ? (
                <Icon color="gray.400" as={MoonIcon} />
            ) : (
                <Icon color="gray.400" as={SunIcon} />
            )}
        </Button>
    )
}

export default ColorModeBtn
