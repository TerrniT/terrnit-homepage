import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbYoutubeMain from '../public/images/contents/spineYoutube.jpg'
import thumbSocialMain from '../public/images/contents/medium.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>

      
      <Heading as="h3" fontSize={20} mb={4}>
        YouTube
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Create 3D Site with Spline and React - Full Course"
            thumbnail={thumbYoutubeMain}
            href="https://www.youtube.com/watch?v=EJxeMbDTkVI"
          />
        </SimpleGrid>
      </Section>


      
      <Section delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Blog Posts
          </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Ten fastest-growing apps in 2022"
            thumbnail={thumbSocialMain}
            href="https://medium.com/@terrnit.megaman"
          />

        </SimpleGrid>
       
        
      </Section>

     
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
