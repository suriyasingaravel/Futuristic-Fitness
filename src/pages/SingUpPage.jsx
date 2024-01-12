import React, { useState } from 'react';
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
  CloseButton,
} from '@chakra-ui/react';
import bg3 from '../assets/images/pexels-cottonbro-studio-4753892.jpg';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Perform form validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);

    // If no errors, you can submit the form
    if (Object.keys(newErrors).length === 0) {
      try {
        setSignupError('');
        const response = await axios.post('https://mock-signup-api.onrender.com/users', formData);
        if (response.data.success) {
          setSignupSuccess(true);
        } else {
          setSignupError('Signup failed. Please try again.');
        }
      } catch (error) {
        setSignupError('Signup failed. Please try again.');
      }
    }
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
            <Alert status="success" mt={4}>
              <AlertIcon />
              Signup successful! You can now proceed to login.
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setSignupSuccess(false)} />
            </Alert>
          )}
          {signupError && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {signupError}
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setSignupError('')} />
            </Alert>
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default Signup;
