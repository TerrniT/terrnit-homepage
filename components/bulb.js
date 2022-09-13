import React, { useState } from 'react'
import NFTYellow from '../public/NFT-yellow.png'
import { Image } from '@chakra-ui/react'

function Bulb() {
  const bulboff = require('../public/NFT-yellow.png')
  const bulbon = require('../public/nft-purple.png')
  const images = { bulboff, bulbon }
  const [img, setImg] = useState(false)

  const imgChangeHandler = () => {
    console.log('hello')
    if (!img) {
      setImg(true)
    } else {
      setImg(false)
    }
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
}

export default Bulb
