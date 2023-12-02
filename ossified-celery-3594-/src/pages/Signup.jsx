import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  ChakraProvider,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import bg3 from '../assets/images/pexels-cottonbro-studio-4753892.jpg';
import axios from 'axios';

const Signup = () => {

  const [formData, setFormData] = useState({
    username: '',
    avatar:"",
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [redirectTimer, setRedirectTimer] = useState(3);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };





  useEffect(() => {
    let interval;

    if (signupSuccess) {
      interval = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Decrease the timer every 1 second

      setTimeout(() => {
        clearInterval(interval);
        setSignupSuccess(false);
        setRedirectTimer(3);
        window.location.href = '/login';
      }, 3000); // Redirect after 3 seconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [signupSuccess]);

  const handleSignUp = (event) => {
    event.preventDefault();

    console.log(formData)

    // Perform form validation
      axios.post(`https://mock-api-templates-b0bf.onrender.com/users`, formData)
      .then((response) => {
          console.log(response.data);
          setSignupSuccess(true);
          setRedirectTimer(3);
        })
        .catch(err => setSignupError(err));
  };

  return (
    <ChakraProvider>
      <div
        style={{
          height: '100vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'whitesmoke',
        }}
      >
        <Box p={8} mx="auto" maxW="md" width="80%">
          <form onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.username}>
                <FormLabel>Enter Image Url</FormLabel>
                <Input
                  type="text"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="teal">
                Sign Up
              </Button>
            </Stack>
          </form>
          {signupSuccess && (
            <Alert status="success" bg="green.600" mt={4}>
              <AlertIcon color="green.400" />
              Signup successful! You will be redirected to the login page in {redirectTimer} seconds.
            </Alert>
          )}
          {signupError && (
            <Alert status="error" bg="red.600"  mt={4}>
              <AlertIcon color="red.400" />
              {signupError}
            </Alert>
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default Signup;
