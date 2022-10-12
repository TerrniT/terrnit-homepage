import {
  Container,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, CBadge } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shoko">
    <Container
      
    >
      <Title>
        Shoko <CBadge>2022</CBadge>
      </Title>
      <P>
      Personal website design for my friends from Shoko Team. Shoko Team are funny guys. 
      They are engaged in the development of web applications, mobile and games
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta
        > Website</Meta>
            
          <Link
            alignItems={"center"}
            href="http://shokoteam.ru">
            https://shokoteam.ru/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Design</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Vk</Meta>
          <Link href="https://vk.com/shoko.team">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Shoko.jpg" alt="Example" />
      <WorkImage src="/images/works/shokoDesign.jpg" alt="Example" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
      {/* embedresponsively.com - if you need embed URL for Iframe */}
        <iframe
          src="https://www.youtube.com/embed/8rnRnHC_RY8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
