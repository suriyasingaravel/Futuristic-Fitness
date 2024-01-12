import React from 'react'
// import Navbar from '../Components/Navbar'
import { Container, Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import fitness from '../assets/images/portrait-muscled-athlete-bodybuilder-workouts-alone-sport-gym-indoors_489646-18891.avif';
import bg from '../assets/images/woman-holding-weights-near-barbells_651396-1617.jpg';
import appstore from '../assets/images/playstore.png';
import Swiper from '../Components/Swiper';



const About = () => {

  return (
    <div style={{paddingTop:"80px", backgroundColor:"black"}} >
     <Box bg="black" color="white">
     <Box
      className="aboutBg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // or 'contain' based on your preference
        minHeight: '300px',
        padding: '50px',
        textAlign: 'center',
      }}
    >
      <Heading as="h2" size="xl" marginBottom={10} color="white">
        Elevate Your Fitness Journey
      </Heading>
      <Link to="/explore">
        <Button colorScheme="blue">Explore More</Button>
      </Link>
    </Box>

      <Container maxW="90%" margin="auto" marginTop={10}>
        <Box marginBottom={10}>
          <Heading color="#FF6129" m={1} as="h3" size="xl">
            Our Mission: Empowering Your Health
          </Heading>
          <Text fontSize="md">
            Welcome to our fitness platform dedicated to helping you achieve your health and fitness goals. We're
            committed to providing you with a comprehensive set of tools and resources to support your journey from
            beginner to advanced levels. Our team of experienced trainers and experts is here to guide you every step of
            the way.
          </Text>
        </Box>

        <Box marginBottom={10}>
        <Image borderRadius="10px" width={{ base: '100%', md: '40%' }} margin="auto" src={fitness} alt="fit" />
        </Box>

        <Box textAlign="center">
          <Heading color="#FF6129" m={1} as="h3" size="xl">
            Workout Plans Tailored for You
          </Heading>
          <Text fontSize="md">
            Whether you're just starting out or looking to take your fitness to the next level, we have a wide range of
            workout plans to suit your needs. From targeted exercises to full-body workouts, our routines are designed
            to challenge and motivate you.
          </Text>
        </Box>
      </Container>

      <Container marginTop="30px" backgroundColor="black" minHeight={{ base: '700px', md: '460px' }} textAlign="center">
        <Box marginBottom={10}>
          <Image borderRadius="10px" w="50%" margin="auto" src={appstore} alt="app" />
        </Box>
        <Box>
          <Heading as="h2" size="xl" paddingBottom="10px">
            Your Health, Your Way
          </Heading>
          <Text paddingBottom="20px">
            Our fitness platform goes beyond workouts. We offer a BMI calculator to help you track your progress and
            understand your body's composition. Additionally, our integrated to-do lists keep you organized, ensuring
            you stay committed to your goals.
          </Text>
          <Button mb={10} as={Link} to="https://play.google.com/store/games?device=windows&pli=1" backgroundColor="#FF6129">
            DOWNLOAD THE APP
          </Button>
          <div style={{width:"100%"}}>
          <Swiper/>
          </div>
         
        </Box>
      </Container>

    </Box>
    
    </div>
  )
}

export default About