import { Heading } from "spectacle"
import React from "react"

const TitleComponent = ({ title }: { title: string }) => (
    <Heading margin="0px" fontSize="48px" textAlign={"center"}>
        {title}
    </Heading>
)

export default TitleComponent
