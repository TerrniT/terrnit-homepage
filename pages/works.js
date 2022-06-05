import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbExample from '../public/images/works/example.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="work_template"
            title="work_template"
            thumbnail={thumbExample}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque id facilisis nisl. Donec a ex odio.
          </WorkGridItem>

        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <WorkGridItem
            id="work_template"
            title="work_template"
            thumbnail={thumbExample}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque id facilisis nisl. Donec a ex odio.
          </WorkGridItem>
      </Section>


      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
        <WorkGridItem
            id="work_template"
            title="work_template"
            thumbnail={thumbExample}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque id facilisis nisl. Donec a ex odio.
          </WorkGridItem>
      </Section>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
