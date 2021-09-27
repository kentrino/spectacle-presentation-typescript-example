import { ChildrenPropsPartial } from "@/types/ChildrenPropsPartial"
import React from "react"
import { UnorderedList } from "spectacle"

const Ul = ({ children }: ChildrenPropsPartial) => (
    <UnorderedList
        listStyleType="'» '"
        margin="0 0 0px 16px"
        padding="0 0 0 16px"
    >
        {children}
    </UnorderedList>
)

export default Ul
