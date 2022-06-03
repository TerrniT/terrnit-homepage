import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbYoutubeMain from '../public/images/contents/youtube-thumb.jpg'
import thumbSocialMain from '../public/images/contents/social-thumb.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>

      
      <Heading as="h3" fontSize={20} mb={4}>
        YouTube
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="YouTube Example"
            thumbnail={thumbYoutubeMain}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="YouTube Example"
            thumbnail={thumbYoutubeMain}
            href="https://www.youtube.com/"
          />
          
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="YouTube Example"
            thumbnail={thumbYoutubeMain}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="YouTube Example"
            thumbnail={thumbYoutubeMain}
            href="https://www.youtube.com/"
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
            title="Social Example"
            thumbnail={thumbSocialMain}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="Social Example"
            thumbnail={thumbSocialMain}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="Social Example"
            thumbnail={thumbSocialMain}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="Social Example"
            thumbnail={thumbSocialMain}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
         
        </SimpleGrid>
       
        
      </Section>

     
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
