import { Box, Grid, Image, Notes, Slide } from "spectacle"
import TitleComponent from "@/components/TitleComponent"
import persist from "@/images/persist.png"
import Next from "@/components/Next"
import React from "react"
import di from "@/images/di.png"
import Ul from "@/components/Ul"
import Li from "@/components/Li"
import Cf from "@/components/Cf"
import Notice from "@/components/Notice"

const List = () => (
    <Slide>
        <TitleComponent title={"リスト"} />
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
            <Ul>
                <Li>😎 1つ目</Li>
                <Li>🤓 2つ目はながいながいながいながいながながいテキスト</Li>
            </Ul>
            <Ul>
                <Li>😎 3つ目</Li>
                <Li>🤓 4つ目</Li>
            </Ul>
        </Grid>
        <Notice>虫歯にはご注意</Notice>
        <Cf link="https://www.google.com">これはグーグル</Cf>
        <Notes>のーと</Notes>
    </Slide>
)

export default List
