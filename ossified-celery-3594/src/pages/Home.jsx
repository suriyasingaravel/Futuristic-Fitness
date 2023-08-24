import React from 'react'
import "../Css/Home.css"
import { Image } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
const Home = () => {
  return (

    <div style={{backgroundImage:`url('./images/bg.jpg')`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"500px"}}>
      <Navbar />
    {/* <Image src='./images/bg.jpg' /> */}
    </div>
  )
}

export default Home