import React from "react"
import { Icon, useColorModeValue } from "@chakra-ui/react"

const IconBox = ({ children }) => {
  return (
    <Icon
      color={useColorModeValue('purple.700', 'yellow.400')}
      w={"48px"} h={"48px"}
    >
      {children}
    </Icon>
  )
}


export default IconBox
