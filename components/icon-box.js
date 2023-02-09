import React from 'react'
import { Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'

const IconBox = React.forwardRef(({ children, label}, ref) => (
  <Tooltip label={label} placement="bottom">
    <Icon
      ref={ref}
      color={useColorModeValue('purple.700', 'yellow.400')}
      w={'52px'}
      h={'52px'}
    >
      {children}
    </Icon>
  </Tooltip>
))

export default IconBox
