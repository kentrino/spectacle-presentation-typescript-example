import { ChildrenPropsPartial } from "@/types/ChildrenPropsPartial"
import { Link, Text } from "spectacle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Appear } from "spectacle"

const Notice = ({ children }: ChildrenPropsPartial) => (
    <Appear>
        <Text
            fontSize={32}
            fontWeight="bold"
            margin="8px 0px 8px 32px"
            padding="0px"
        >
            注意&nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            {children}
        </Text>
    </Appear>
)

export default Notice
