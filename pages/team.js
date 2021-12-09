import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

function team() {
    return (
        <>
            <NextSeo title="The Team | B2C" description="Our Team " />

            <Box my={10} mx="auto" w="59%">
                <Heading fontSize="5xl">The Team</Heading>

                <SimpleGrid mt={10} columns={3} spacing={10}>
                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Kalp Patel"
                        _role="President"
                    />

                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Jiyaa Patel"
                        _role="Head of Logistics"
                    />

                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Sarthak V."
                        _role="Head of Research"
                    />

                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Dev Patel"
                        _role="Head of Finances"
                    />

                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Nishil K."
                        _role="Head of IT"
                    />

                    <ImageCard
                        src="https://bit.ly/dan-abramov"
                        name="Aahan"
                        _role="Head of HRM"
                    />
                </SimpleGrid>

                {/* <ImageSlider />  */}
            </Box>
        </>
    )
}

function ImageCard({ src, name, _role }) {
    return (
        <Box w="full">
            <a href="mailto:/">
                <Image
                    filter="grayscale(100%)"
                    transition="0.3s"
                    maxH="250px"
                    w="full"
                    _hover={{
                        filter: 'grayscale(0%)',
                    }}
                    borderRadius={5}
                    src={src}
                />

                <Text mt={2} fontWeight="bold" fontSize="lg">
                    {name}
                </Text>
                <Text fontSize="md">{_role}</Text>
            </a>
        </Box>
    )
}

export default team
