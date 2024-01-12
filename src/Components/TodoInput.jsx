import React, { useState } from 'react';
import { Input, Button, Box, Flex, FormControl, FormLabel } from '@chakra-ui/react';

const TodoInput = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit() {
    if (newTodo.trim() !== '') {
      onSubmit(newTodo);
      setNewTodo('');
    }
  }

  return (
    <Box paddingBottom={{base:"7px",md:"30px"}}>
      <FormControl>
        <Flex>
          <FormLabel flex="1" htmlFor="todoInput" color="white">
            Enter Workout task
          </FormLabel>
          <Input
            flex="2"
            type="text"
            id="todoInput"
            placeholder="Enter task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            color="white" // Set text color to white
            bg="black" // Set background color to black
            marginRight="30px"
          />
          <Button onClick={handleSubmit} colorScheme="teal">
            Add Todo
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default TodoInput;
