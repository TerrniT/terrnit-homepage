import { Container, Link, List, ListItem, Tag } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shoko">
    <Container>
      <Title>
        Apollo <Meta>2022</Meta>
      </Title>
      <P>
          Markdown todo-app build in React Native
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> Mobile app</Meta>
          <Tag mt={1} size="sm" variant='solid'>
            Currently Closed
          </Tag>

        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Services</Meta>
          <span>Design, Development</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Expo</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/apollo-portfolio.png" alt="apollo" />
      <WorkImage src="/images/works/apollo-portfolio-zoom.png" alt="apollo_zoomed" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
