import { Link, Text } from "spectacle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { ChildrenPropsPartial } from "@/types/ChildrenPropsPartial"

const Cf = ({ link, children }: { link: string } & ChildrenPropsPartial) => (
    <Text
        fontSize={20}
        fontWeight="bold"
        margin="8px 0px 8px 32px"
        padding="0px"
    >
        参考&nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
        &nbsp;
        <Link href={link} fontSize={20}>
            {children}
        </Link>
    </Text>
)

export default Cf
