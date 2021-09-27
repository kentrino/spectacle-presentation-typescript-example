import { Heading } from "spectacle"
import React from "react"

const TitleComponent = ({ title }: { title: string }) => (
    <Heading
        fontSize="48px"
        textAlign={"left"}
        padding="0px 0px 0px 0px"
        margin="0px 0px 8px 8px"
    >
        {title}
    </Heading>
)

export default TitleComponent
