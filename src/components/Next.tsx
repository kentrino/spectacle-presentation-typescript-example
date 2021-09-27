import { Appear, Text } from "spectacle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { ChildrenPropsPartial } from "@/types/ChildrenPropsPartial"

const Next = ({ children }: ChildrenPropsPartial) => (
    <Appear>
        <Text fontWeight="bold">
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp; {children}
        </Text>
    </Appear>
)

export default Next
