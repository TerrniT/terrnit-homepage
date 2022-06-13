import {
  Container,
  Badge,
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
  <Layout title="Inkdrop">
    <Container
      
    >
      <Title>
        Lorem <CBadge>20xx</CBadge>
      </Title>
      <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget 
      pellentesque odio. Pellentesque eu dapibus dolor. Suspendisse nisi nunc, 
      sollicitudin at ipsum sit amet, pretium imperdiet tellus. Aenean et sem non nisl 
      mollis tempus vel at tellus. Vivamus metus ex, hendrerit eu consequat eleifend
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta
        > Website</Meta>
            
          <Link
            alignItems={"center"}
            href="https://habr.ru">
            https://example.website.link/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://habr.ru">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/example.jpg" alt="Example" />
      <WorkImage src="/images/works/example.jpg" alt="Example" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
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
