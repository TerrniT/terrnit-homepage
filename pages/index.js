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
  Code
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
  SiWebpack,
  SiPrettier,
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
            Frontend Developer / Designer
          </Text>
          <Text fontSize={'small'} marginTop="2" color={'gray.500'}>
            «It is not that I&apos;m so smart. But I stay with the questions
            much longer.»
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
          I&apos;m a self-taught React frontend developer passionate about
          developing creative web applications. I have completed many projects
          in the past, from simple websites to complex web applications, and
          I&apos;m always looking for new challenges.
        </Paragraph>
        <Paragraph>
          Currently I&apos;m interesting in web3 and blockchain, but not closed
          to other interesting things
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
          skills and hard in frontend
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Freelancing and looking for full-time job as frontend developer.
          <NextLink href="/works/shoko" passHref scroll={false}>
            <Link> You can see my latest project </Link>
          </NextLink>
        </BioSection>
      </Section>

      {/* # Create a Project section */}

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <BioYear>Dev Stack</BioYear>
        </Heading>
        <Container h={'full'}>
          <IconBox label="Javascript">
            <SiJavascript />
          </IconBox>
          <IconBox label="Typescript">
            <SiTypescript />
          </IconBox>
          <IconBox label="React">
            <FaReact />
          </IconBox>
          <IconBox label="NextJS">
            <SiNextdotjs />
          </IconBox>
          <IconBox label="TailwindCSS">
            <SiTailwindcss />
          </IconBox>
          <IconBox label="CSS3">
            <SiCss3 />
          </IconBox>
          <IconBox label="Prisma">
            <SiPrisma />
          </IconBox>
          <IconBox label="Firebase">
            <SiFirebase />
          </IconBox>
          <IconBox label="Supabase">
            <SiSupabase />
          </IconBox>
          <IconBox label="Solidity">
            <SiSolidity />
          </IconBox>
          <IconBox label="WEB3">
            <SiWeb3Dotjs />
          </IconBox>
          <IconBox label="Redux">
            <SiRedux />
          </IconBox>
          <IconBox label="ThreeJS">
            <SiThreedotjs />
          </IconBox>
          <IconBox label="React Router">
            <SiReactrouter />
          </IconBox>
          <IconBox label="ZOD">
            <BsGem />
          </IconBox>
        </Container>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <BioYear>Tools</BioYear>
        </Heading>
        <Container h={'full'}>
          <IconBox label="Neovim">
            <SiNeovim />
          </IconBox>
          <IconBox label="Eslint">
            <SiEslint />
          </IconBox>
          <IconBox label="Prettier">
            <SiPrettier />
          </IconBox>
          <IconBox label="NPM">
            <SiNpm />
          </IconBox>
          <IconBox label="Babel">
            <SiBabel />
          </IconBox>
          <IconBox label="Webpack">
            <SiWebpack />
          </IconBox>
          <IconBox label="GIT">
            <DiGit />
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
            Code{' '}
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
          <NextLink href="/404" passHref scroll={false}>
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
