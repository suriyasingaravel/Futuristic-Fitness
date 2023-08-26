import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
  Box,
  Stack,
  Button,
  Select,
  Flex,
} from "@chakra-ui/react";

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1); // Default to 1 minute

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsRunning(false);
            setInitialCount(0);
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (count === 0 && isRunning) {
      setIsRunning(false);
      setInitialCount(0);
    }
  }, [count, isRunning]);

  const handleStart = () => {
    if (!isRunning) {
      if (initialCount === 0) {
        setCount(selectedTime * 60); // Convert minutes to seconds
      } else {
        setCount(initialCount);
      }
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setInitialCount(count);
      setIsRunning(false);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setCount(0);
    setInitialCount(0);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Flex justifyContent="center">
        <SimpleGrid
          paddingTop="120px"
          paddingBottom="60px"
          placeItems="center"
          spacing={10}
        >
          <Box>
            <Select
              width="200px"
              value={selectedTime}
              onChange={(e) => setSelectedTime(parseInt(e.target.value))}
              color="grey"
            >
              <option value={1}>1 min</option>
              <option value={2}>2 min</option>
              <option value={3}>3 min</option>
              <option value={4}>4 min</option>
              <option value={5}>5 min</option>
            </Select>
          </Box>
          <Box>
            <CircularProgress
              value={(count / (selectedTime * 60)) * 100} 
              color="blue.500"
              size="150px"
            >
              <CircularProgressLabel color="white">
                {Math.floor(count / 60).toString().padStart(2, "0")}:
                {(count % 60).toString().padStart(2, "0")}
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="md"
              onClick={handleStart}
              disabled={isRunning}
            >
              START
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={handlePause}
              disabled={!isRunning}
            >
              PAUSE
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={handleStop}
              disabled={!isRunning && count === 0}
            >
              STOP
            </Button>
          </Stack>
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default Stopwatch;
