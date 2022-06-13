import NextLink from 'next/link'
import { 
  Heading, 
  Box, 
  Image, 
  Link, 
  Badge, 
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge 
    color={useColorModeValue("white","black")}
    bg={useColorModeValue("purple.400","yellow.400")}
    colorScheme="yellow" 
    mr={3}>
    {children}
  </Badge>
)

export const CBadge = ({ children }) => (
  <Badge 
    color={useColorModeValue("white","black")}
    bg={useColorModeValue("purple.400","yellow.400")}
    colorScheme="yellow" 
    mr={3}>
    {children}
  </Badge>
)

