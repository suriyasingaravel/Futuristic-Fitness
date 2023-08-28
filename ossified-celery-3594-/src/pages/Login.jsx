import React, { useState } from 'react';
import { Input, Button, Flex, ChakraProvider, Alert, AlertIcon, CloseButton } from '@chakra-ui/react';
import bg2 from '../assets/images/pexels-cottonbro-studio-4761352.jpg';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoginError('');
      // Perform login API request
      const response = await axios.post('https://mock-signup-api.onrender.com/users', credentials);
      if (response.data.success) {
        console.log('Login successful');
        // Perform navigation to home or desired page
      } 
      else {
        setLoginError('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    }
  };

  return (

      <div
        style={{
          height: '100vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg2})`,
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
        <form onSubmit={handleLogin}>
          <Flex direction="column" alignItems="center">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              marginBottom="10px"
              value={credentials.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              marginBottom="10px"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button type="submit" colorScheme="teal">
              LOGIN
            </Button>
            {loginError && (
              <Alert status="error" mt={4}>
                <AlertIcon />
                {loginError}
                <CloseButton position="absolute" right="8px" top="8px" onClick={() => setLoginError('')} />
              </Alert>
            )}
          </Flex>
        </form>
      </div>
  );
};

export default Login;
