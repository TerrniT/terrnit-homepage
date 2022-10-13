import styled from '@emotion/styled'

import { Button } from '@chakra-ui/react'

export const CButton = styled(Button)`
  rightIcon={<ChevronRightIcon />};
  color={useColorModeValue("white","black")};
  bg={useColorModeValue("purple.400","yellow.400")};
`
