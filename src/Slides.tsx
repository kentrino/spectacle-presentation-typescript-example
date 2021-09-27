import { Box, Deck, FlexBox, FullScreen, Progress } from "spectacle"
import React from "react"
import Title from "@/Title"
import List from "@/List"

const theme = {
    fonts: {
        header: `"Font Awesome 5 Free", "Source Sans 3", Helvetica, Arial, sans-serif`,
        text: `"Font Awesome 5 Free", "Source Sans 3", Helvetica, Arial, sans-serif`,
    },
    letterSpacings: "0.4em",
}

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

const Slides = () => (
    <Deck theme={theme} template={template}>
        <Title />
        <List />
    </Deck>
)

export default Slides
