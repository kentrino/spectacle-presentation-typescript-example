import React from "react"
import PropTypes from "prop-types"

const Test = ({ height }: { height: number }) => {
    return <div style={{ height, width: "100%", backgroundColor: "yellow" }} />
}

Test.propTypes = {
    height: PropTypes.number.isRequired,
}

export default Test
