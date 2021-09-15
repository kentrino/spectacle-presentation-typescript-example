import { Box, Grid, Slide, Text } from "spectacle"
import React from "react"
import TitleComponent from "@/components/TitleComponent"
import { faKey, faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconSlide = () => (
    <Slide>
        <TitleComponent title="アイコン付きスライド" />

        <Grid gridTemplateColumns="3fr 1fr" gridColumnGap={15}>
            <Box>
                <Text>
                    <FontAwesomeIcon icon={faWifi} /> wifi
                </Text>
                <Text>
                    <FontAwesomeIcon icon={faKey} /> yes
                </Text>
            </Box>
        </Grid>
        <Box>
            <Text fontSize="24pt">
                ワイファイ
                <br />
            </Text>
        </Box>
    </Slide>
)

export default IconSlide
