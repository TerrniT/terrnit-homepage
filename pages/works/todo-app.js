import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shoko">
    <Container>
      <Title>
        Todo App <Meta>2022</Meta>
      </Title>
      <P>
        One of my favorite todolist written as a test assignment for the Mindbox company
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Web App</Meta>

          <Link alignItems={'center'} href="https://three-todo.vercel.app">
            https://three-todo.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Service</Meta>
          <span>Design, Development</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, React-fiber, Chakra UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/todoThumb.jpg" alt="todoThumb" />
      <WorkImage src="/images/works/todo_2.jpg" alt="todo_2" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
