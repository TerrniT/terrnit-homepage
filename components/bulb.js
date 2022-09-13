import NFTYellow from '../public/NFT-yellow.png'
import { Image } from '@chakra-ui/react'

function Bulb() {
  console.log('aye')
}
return (
  <Image
    src={NFTYellow}
    alt="bulb-off"
    onClick={imgChangeHandler}
    height={150}
    weight={150}
  />
)

export default Bulb
