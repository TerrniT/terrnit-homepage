import { Link, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, PresentationGridItem } from '../components/grid-item'

import ShokoThumb from '../public/images/works/Shoko.jpg'
import MyNFTArea from '../public/images/works/MyNFTArea_thumb.jpg'
import ApolloThumb from '../public/images/works/apolloThumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Latest projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="shoko" title="Shoko" thumbnail={ShokoThumb}>
            Corporate site for application development of the Shoko team
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <WorkGridItem id="shoko" title="Shoko" thumbnail={ShokoThumb}>
          Corporate site for application development of the Shoko team
        </WorkGridItem>

        <WorkGridItem id="nftarea" title="MyNFTArea" thumbnail={MyNFTArea}>
          Design my own NFT collection & Build web resource / market
        </WorkGridItem>
      </Section>

      <Section
        delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Latest Presentations
        </Heading>

        <PresentationGridItem
          title="Web Design"
          src="https://slides.com/terrnit/web-design/embed"
        />
        <PresentationGridItem
          title="CASE Tool: GIT"
          src="https://slides.com/terrnit/deck/embed"
        />
        <PresentationGridItem
          title="Linux"
          src="https://slides.com/terrnit/code/embed"
        />
        <PresentationGridItem
          title="Factory Method"
          src="https://slides.com/terrnit/code-c9db2f/embed"
        />
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Future works
        </Heading>
        <WorkGridItem id="work_template" title="Apollo" thumbnail={ApolloThumb}>
          To-do / markdown mobile app
        </WorkGridItem>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
