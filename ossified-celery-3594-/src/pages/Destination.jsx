import React from 'react'
import "../Css/Destination.css"
import bg3 from "../assets/images/pexels-cottonbro-studio-4753892.jpg"
import beginner from "../assets/images/pexels-mister-mister-3490348.jpg" 
import advanced from "../assets/images/pexels-marcus-chan-17898138.jpg"
import intermed from "../assets/images/pexels-cesar-galeão-3289711.jpg"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box,Heading,Image} from '@chakra-ui/react'
import { Stack, HStack, VStack,Text,SimpleGrid} from '@chakra-ui/react'
import {Link} from "react-router-dom"

const Destination = () => {
  return (
    <div style={{paddingTop:"100px",backgroundColor:"black"}}>
    {/* <div className='cont' style={{ backgroundImage: `url(${bg3})` }}> */}
    <Box w="90%" margin="auto" marginTop={10} >
      <SimpleGrid columns={{base:1,md:3}} placeItems="center"  >
        <Box marginBottom="40px">
         <Image borderRadius="10px" marginRight={5} w='20rem' src={beginner} alt='fit'  /> 
         <Link to="/beginner" > <Button  marginTop="20px" colorScheme="teal" size="md" > BEGINNER WORKOUTS </Button> </Link>
        </Box>
        <Box marginBottom="40px">
        <Image borderRadius="10px" w='20rem' src={intermed} alt='fitness' />
        <Link to="/intermediate" > <Button  marginTop="20px"  colorScheme="teal" size="md" > INTERMEDIATE WORKOUTS </Button> </Link>
   
        </Box>
        <Box marginBottom="40px">
        <Image borderRadius="10px" w='20rem' src={advanced} alt='fitness' />
        <Link to="/advanced" > <Button  marginTop="20px"  colorScheme="teal" size="md" > ADVANCED WORKOUTS </Button> </Link>
        </Box>
      </SimpleGrid>
    </Box>


    </div>
  )
}

export default Destination