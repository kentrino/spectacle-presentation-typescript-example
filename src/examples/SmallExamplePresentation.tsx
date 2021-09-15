import { Box, Deck, FlexBox, FullScreen, Progress } from "spectacle"
import React from "react"
import theme from "@/examples/theme"
import IconSlide from "@/examples/IconSlide"

const template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
    >
        <Box padding="0 1em">
            <FullScreen />
        </Box>
        <Box padding="1em">
            <Progress />
        </Box>
    </FlexBox>
)

const SmallExamplePresentation = () => (
    <Deck theme={theme} template={template}>
        <IconSlide />
    </Deck>
)

export default SmallExamplePresentation
