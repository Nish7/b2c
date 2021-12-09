import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import Landing from '@/components/Landing'

export default function Home() {
    return (
        <>
            <NextSeo
                title="Home | B2C"
                description="A short description goes here."
            />
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
