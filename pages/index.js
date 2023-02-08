import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  Code,
  HStack
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import IconBox from '../components/icon-box'

//Import Icons
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import {
  SiNeovim,
  SiVk,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiNextdotjs,
  SiNpm,
  SiBabel,
  SiEslint,
  SiTypescript,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiSolidity,
  SiWeb3Dotjs,
  SiRedux,
  SiThreedotjs,
  SiReactrouter
} from 'react-icons/si'
import { BsGem } from 'react-icons/bs'
import { DiGit } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'

import ImageNext from 'next/image'

const ProfileImage = chakra(ImageNext, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3.5}
        textAlign="center"
        fontSize={13}
        letterSpacing={'wide'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(15px)' }}
      >
        <Code /*colorScheme={useColorModeValue('purple', 'yellow')} **/>
          <Text>npm i happiness --save</Text>
        </Code>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gleb Kotovský
          </Heading>
          <Text color={useColorModeValue('purple.700', 'yellow.400')}>
            Web Developer / Designer / YouTuber
          </Text>
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
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src={useColorModeValue('/NFTblue.png', '/NFT-yellow.png')}
              alt="Profile image"
              width="150px"
              height="150px"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello, I am a self-taught programmer. In 2019, I first got acquainted
          with IT. I took an introductory course in Python. Now my main stack is
          frontend web and design.{' '}
          <NextLink href="/works/shoko" passHref scroll={false}>
            <Link> You can see my latest project </Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink
            download="resume_Gleb_Kotovsky.pdf"
            href="resume_Gleb_Kotovsky.pdf"
            passHref
            legacyBehavior
            scroll={false}
          >
            <Button
              rightIcon={<ChevronRightIcon />}
              mt={5}
              p={7}
              color={useColorModeValue('white', 'black')}
              bg={useColorModeValue('purple.700', 'yellow.400')}
            >
              Open Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Ekaterinburg
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          PyGame Dev
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>I study at college with a degree in programming
          in computer systems
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>I create my pet projects. Improving my soft
          skills and learn how to code (a lot)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Freelancing and looking for full-time job as frontend developer
        </BioSection>
      </Section>

      {/* # Create a Project section */}

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <BioYear>Dev Stack</BioYear>
        </Heading>

        <Container h={'full'}>
          <IconBox>
            <SiJavascript />
          </IconBox>
          <IconBox>
            <SiTypescript />
          </IconBox>
          <IconBox>
            <FaReact />
          </IconBox>
          <IconBox>
            <SiNextdotjs />
          </IconBox>
          <IconBox>
            <SiTailwindcss />
          </IconBox>
          <IconBox>
            <SiCss3 />
          </IconBox>
          <IconBox>
            <SiNeovim />
          </IconBox>
          <IconBox>
            <SiNpm />
          </IconBox>
          <IconBox>
            <SiBabel />
          </IconBox>
          <IconBox>
            <SiEslint />
          </IconBox>
          <IconBox>
            <DiGit />
          </IconBox>
          <IconBox>
            <SiPrisma />
          </IconBox>

          <IconBox>
            <SiFirebase />
          </IconBox>

          <IconBox>
            <SiSupabase />
          </IconBox>
          <IconBox>
            <SiSolidity />
          </IconBox>
          <IconBox>
            <SiWeb3Dotjs />
          </IconBox>
          <IconBox>
            <SiRedux />
          </IconBox>
          <IconBox>
            <SiThreedotjs />
          </IconBox>
          <IconBox>
            <SiReactrouter />
          </IconBox>
          <IconBox>
            <BsGem />
          </IconBox>
        </Container>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I really love
        </Heading>
        <Paragraph>
          Coffee, Chill lo-fi hip hop music,{' '}
          <Link href="https://www.behance.net/dfe5d201" target="_blank">
            Design
          </Link>
          , Study, Gym and{' '}
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
                color={useColorModeValue('purple.700', 'yellow.400')}
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
                color={useColorModeValue('purple.700', 'yellow.400')}
                leftIcon={<SiVk />}
              >
                @gleb kotovský
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/princess_slayrr" target="_blank">
              <Button
                variant="ghost"
                color={useColorModeValue('purple.700', 'yellow.400')}
                leftIcon={<IoLogoInstagram />}
              >
                @princess_slayrr
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              color={useColorModeValue('white', 'black')}
              bg={useColorModeValue('purple.700', 'yellow.400')}
            >
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
