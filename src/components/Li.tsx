import { Appear, ListItem } from "spectacle"
import React from "react"
import { ChildrenPropsPartial } from "@/types/ChildrenPropsPartial"

const Li = ({ children }: ChildrenPropsPartial) => (
    <Appear>
        <ListItem margin="0px 0px 16px 0px">{children}</ListItem>
    </Appear>
)

export default Li
