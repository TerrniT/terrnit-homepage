import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const PresentationGridItem = ({ src, desc, children }) => (
  <Flex mt={5}
    width={{ base: '450', md: 'auto' }}
    justifyContent="center" alignItems="center" textAlign="center">
    <iframe
      title={desc}
      src={src}
      width="100%"
      height="220"
      scrolling="no"
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
    <LinkBox cursor="pointer">
      {children}
    </LinkBox>
  </Flex>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box mb={8} w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
