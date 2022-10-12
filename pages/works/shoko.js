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
          <Meta>Service</Meta>
          <span>Design, SEO</span>
        </ListItem>
        <ListItem>
          <Meta>Vk</Meta>
          <Link href="https://vk.com/shoko.team">
            Join their group on Vkontakte<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Shoko.jpg" alt="Example" />
      <WorkImage src="/images/works/shokoDesign.jpg" alt="Example" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/jSt2eV2HY3w?autoplay=1&amp;loop=1&amp;&amp;playlist=jSt2eV2HY3w" 
          title="YouTube video player" 
          frameborder="0" 
          name="Shoko" 
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
