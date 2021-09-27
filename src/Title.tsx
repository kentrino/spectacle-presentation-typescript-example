import { FlexBox, Heading, Slide } from "spectacle"
import React from "react"
import { Notes } from "spectacle"

const Title = () => (
    <Slide>
        <FlexBox height="100%" flexDirection="column">
            <Heading margin="0px" fontSize="64pt">
                タイトル
            </Heading>
            <Heading margin="0px" fontSize="48pt" color="primary">
                サブタイトル
            </Heading>
            <Heading margin="0px 32px" color="primary" fontSize="h3">
                kentrino
            </Heading>
        </FlexBox>
    </Slide>
)

export default Title
