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
        NFTArea <CBadge>2022</CBadge>
      </Title>
      <P>
       Design my own NFT collection & Build web resource / market
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta
        > Website</Meta>
            
          <Link
            alignItems={"center"}
            href="https://nft-area.vercel.app">
            https://nft-area.vercel.app<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Service</Meta>
          <span>Design, Codding</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/MyNFTArea_thumb.jpg" alt="NftArea" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/RdQ251eA9CIw?autoplay=1&amp;loop=1&amp;&amp;playlist=RdQ251eA9CI" 
          title="YouTube video player" 
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        >
        </iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
