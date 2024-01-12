import { useState } from 'react';
import {
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import bg2 from '../assets/images/pexels-cottonbro-studio-4761352.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')||null;
  const [flag,setFlag] = useState("false");

  useEffect(()=>{

  },[flag]);


  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const toast = useToast();

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Perform login API request
      const response = await axios.get('https://mock-api-templates-b0bf.onrender.com/users',
      {params: {email:credentials.email,password:credentials.password}});

      console.log(response.data);

      if (response.data.length > 0) { 
        localStorage.setItem('token', Math.random());
        localStorage.setItem('username', response.data[0].username);
        localStorage.setItem('email', response.data[0].email);
        localStorage.setItem('avatar', response.data[0].avatar);
        setFlag(true);
        showToast('Login successful', 'success');
        navigate('/explore');
        // Perform navigation to home or desired page
      } else {
        showToast('Invalid credentials. Please check your email and password.', 'error');
      }
    } catch (error) {
      showToast('Login failed. Please try again.', 'error');
    }
  };

  const showToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
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
          <FormControl marginBottom="10px" width="100%"> {/* Added FormControl */}
            <FormLabel htmlFor="email" style={{textAlign:"left"}}>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              width="100%" // Adjusted width
              aria-label="Email Input"
            />
          </FormControl>
          <FormControl marginBottom="10px" width="100%"> {/* Added FormControl */}
            <FormLabel htmlFor="password" style={{textAlign:"left"}}>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              width="320px" // Adjusted width
              aria-label="Password Input"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="50%" mt={5}> {/* Adjusted width */}
            LOGIN
          </Button>
         
          <Text mt={2} color="white" fontWeight={"bold"}>
            Don't have an account? <Link to="/signup"> Sign up</Link>
          </Text>
        </Flex>
      </form>
    </div>
  );
};

export default Login;
