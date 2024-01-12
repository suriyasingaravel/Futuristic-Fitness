import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-2.png';

const links = [
  { text: 'Home', path: '/' },
  { text: 'Explore', path: '/explore' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/' },
];

const NavLink = ({ to, children }) => {
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.600'),
      }}
      to={to}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const avatar = localStorage.getItem('avatar');

  console.log(token);

  useEffect(() => {
    // Update isLoggedIn when the token changes
    setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
  }, [token]);

  const handleLogout = () => {
    // Simulate logout process
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <Box zIndex="10" width="100%" position="fixed" bg="black" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={240} alignItems="center">
          <Link to="/">
            <Image width={130} size="sm" src={logo} alt="Logo" />
          </Link>
          <HStack as="nav" spacing={12} display={{ base: 'none', md: 'flex' }}>
            {links.map(({ text, path }) => (
              <NavLink to={path} key={path}>
                {text}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        {(!token) ? (
         <Box>
         <Link to="/login">
           <Button mr={{ base:2, sm: 2, md:2, lg:2}}>Login</Button>
         </Link>
         <Link to="/signup">
           <Button >SIGN UP</Button>
         </Link>
       </Box>
        ) : (
          <Flex alignItems="center">
             {token && (
        <Box display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
          <Text mr={{ base: 0, sm: 0, md: 1, lg: 1 }}>Hello, {username}!</Text>
        </Box>
      )}
            <Menu>
              <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
                <Avatar src={avatar} size="sm" alt="User Avatar" />
              </MenuButton>
              <MenuList bg="black" color="white">
                <Link to="/bmicalculator">
                  <MenuItem bg="black" color="white">BMI Calculator</MenuItem>
                </Link>
                <Link to="/stopwatch">
                  <MenuItem bg="black" color="white">Stopwatch</MenuItem>
                </Link>
                <Link to="/todo">
                  <MenuItem bg="black" color="white">Workout Plan</MenuItem>
                </Link>
                <MenuDivider />
                <Button backgroundColor="black" _hover={{ backgroundColor: 'black' }} onClick={handleLogout}>
                  <MenuItem bg="black" color="white" > <Button> Logout </Button></MenuItem>
                </Button>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {links.map(({ text, path }) => (
              <NavLink to={path} key={path}>
                {text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
