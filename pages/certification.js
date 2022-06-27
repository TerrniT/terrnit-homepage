import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import itconf2022 from '../public/images/contents/itconf2022_view.png'
import kodabra from '../public/images/contents/kodabra_view.png'

const Certification = () => (
  <Layout title="Certification">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>

      </Heading>
      
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem 
            title="Kodabra 2019" 
            thumbnail={kodabra} 
            href="https://codabra.org/python/razrabotka-2d-igr-lvl1-10-14-let"
            />
          <GridItem  
            title="Russian IT 2022 Conf" 
            thumbnail={itconf2022} 
            href="https://cloud.mail.ru/public/BN7C/6k8EWXhTQ#text=600"
            />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Certification
export { getServerSideProps } from '../components/chakra'
