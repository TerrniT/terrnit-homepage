import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  //SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import ImageNext from 'next/image'
//import headerBackground from '../public/images/contents/header-bg.jpg'

const ProfileImage = chakra(ImageNext, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box>
        <Image
          src='gibbresh.png'
          boxSize={480}
          fallbackSrc='https://via.placeholder.com/150'
          alt='error 404: doesnt load properly' 
          mb={6}
          />
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3.5}
        textAlign="center"
        fontSize={12}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(15px)' }}
      >
        «The design is not just what it looks like. The design is how it works»
        @Steve Jobs
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gleb Kotovsky
          </Heading>
          <p>Web Developer / Designer / YouTuber</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/footprint.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Some text that i will come up with soon {' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>TestLink</Link>
          </NextLink>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button 
              rightIcon={<ChevronRightIcon />}
              color={useColorModeValue("white","black")}
              bg={useColorModeValue("purple.400","yellow.400")}
              >
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear
          >2003</BioYear>
          Born in Ekaterinburg
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          I first got acquainted with IT. I took an introductory
          course on game development with Python
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          I study at college with a degree in programming in computer systems.
        </BioSection>
      </Section>

      {/* # Create a Project section */}
      

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I really love
        </Heading>
        <Paragraph>
          Coffee, Chill lo-fi hip hop music,{' '}
          <Link href="https://www.behance.net/dfe5d201" target="_blank">
            Design
          </Link>
          , Study,{' '}
          <Link href="https://github.com/TerrniT" target="_blank">
            Code
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/terrnit" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @terrnit 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://vk.com/princess_slayrr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @princess_slayrr (VK) 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/princess_slayrr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @princess_slayrr
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
