import React, { useState } from 'react';
import { Input, Button, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import TodoInput from '../Components/TodoInput';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos([...todos, { title: newTodo, status: false }]);
  }

  function handleToggle(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div style={{backgroundColor:"black"}}>
    <Box paddingTop="100px" height="500px" backgroundColor="black"  width={{base:"90%",md:"50%"}} margin="auto" >
      <TodoInput onSubmit={handleAddTodo} />
      <div data-testid="todos-wrapper">
        {todos.map((el, index) => ( 
          <Flex key={index} alignItems="center" mt={2}>
            <Text
              flex="1"
              textDecoration={el.status ? 'line-through' : 'none'}
              color="blue.500" // Set text color to blue
            >
              {el.title}
            </Text>
            <Button
              onClick={() => handleToggle(index)}
              colorScheme={el.status ? 'gray' : 'green'}
              mr={2}
            >
              {el.status ? 'Undo' : 'Done'}
            </Button>
            <Button onClick={() => handleDelete(index)} colorScheme="red">
              Delete
            </Button>
          </Flex>
        ))}
      </div>
    </Box>
    </div>
  );
};

export default Todos;
