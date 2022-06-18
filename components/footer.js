import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box 
      align="center" 
      opacity={0.4} 
      fontSize="sm"
      color="gray.200">
      &copy; {new Date().getFullYear()} Gleb Kotovský. All Rights Reserved.
    </Box>
  )
}

export default Footer
