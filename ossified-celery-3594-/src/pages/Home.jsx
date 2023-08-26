import React from 'react'
import "../Css/Home.css"
import { Container, Image } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box,Heading} from '@chakra-ui/react'
import { Stack, HStack, VStack,Text,SimpleGrid} from '@chakra-ui/react'
import {Link} from "react-router-dom"




const Home = () => {

  return (
  <div className='main'>
    <div className='homeBg' >
      <Heading  as='h2' size='xl' color="whitee" marginBottom={10} > TAKE YOUR TRAINING TO THE NEXT LEVEL</Heading>
      <Link to="/explore"> <Button colorScheme='blue'>Explore More</Button> </Link> 
    </div>

    <Box w="90%" margin="auto" marginTop={10}>
      <SimpleGrid columns={{base:1,md:3}} placeItems="center" spacing={10}>
        <Box>
        <Link to="/explore" > <Image borderRadius="10px" marginRight={5} w='20rem' src='./images/pexels-tima-miroshnichenko-6389075.jpg' alt='fit' /></Link> 
        </Box>
        <Box>
        <Image borderRadius="10px" w='20rem' src='./images/pexels-cottonbro-studio-4753996.jpg' alt='fitness' />
        </Box>
        <Box>
        <VStack marginLeft={10}>
        <Heading color="#FF6129" m={1}  as='h3' size='xl'> We Help People All Over The World Live a Healthier Life    </Heading>
        <Text m={1} fontSize='md'>The hardest part of improving your fitness and nutrition is finding someone that understands why you struggle. We specialize in meeting you where you are, offering practical plans and advice that are designed for real life and deliver results. You are not alone, and we are here to help.</Text>
        </VStack>
        </Box>
      </SimpleGrid>
    </Box>

    <SimpleGrid marginTop="30px" backgroundColor="#00B7BC" height={{base:"700px",md:"460px"}}  columns={{base:1,md:2}} placeItems="center" spacing={10}>
      <Box>
      <Link to="/explore" > <Image borderRadius="10px" marginRight={5} w='30rem' src='./images/app-2x.jpg' alt='fit' /></Link> 
      </Box>
      <Box width="90%" margin="auto" >
        <Heading as='h2' size='xl' paddingBottom="10px" > TAP INTO WAY MORE </Heading>
        <Text w="100%" paddingBottom="20px" >My free Futuristic app is one of the best ways to get started in the gym. Get access to way more support including personalised training plans, over 100 workouts and you can plan your visit at quieter times if you like with our live attendance tracker.</Text>
       <Link  to="https://play.google.com/store/games?device=windows&pli=1"> <Button  paddingLeft="12px" backgroundColor="#FF6129" >DOWNLOAD THE APP</Button></Link>  
      </Box>
    </SimpleGrid>

    </div>

  )
}

export default Home