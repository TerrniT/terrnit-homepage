import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shoko">
    <Container>
      <Title>
        Shoko <Meta>2022</Meta>
      </Title>
      <P>
        Personal website design for my friends from Shoko Team. Shoko Team are
        funny guys. They are engaged in the development of web applications,
        mobile and games
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> Website</Meta>

          <Link alignItems={'center'} href="http://shokoteam.ru">
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
            Join their group on Vkontakte
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Shoko.jpg" alt="Shoko" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
