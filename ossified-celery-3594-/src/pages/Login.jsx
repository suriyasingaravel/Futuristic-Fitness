import React, { useState } from 'react';
import { Container, Input, Button, SimpleGrid, Flex } from '@chakra-ui/react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCredentials({
      email: '',
      password: '',
    });
  }

  return (
    <div
      style={{
        height: '100vh', 
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/pexels-cottonbro-studio-4761352.jpg')`,
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
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  );
};

export default Login;
