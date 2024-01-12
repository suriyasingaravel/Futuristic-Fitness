import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
  CircularProgressLabel,
  CircularProgress,
  Box,
} from '@chakra-ui/react';

const ExerciseModal = ({ exercise, isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleToggle = () => {
    if (!isActive) {
      setSeconds(0);
    }
    setIsActive(!isActive);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="black" color="white">
        <ModalHeader>{exercise.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <Image width="100%" src={exercise.image} alt={exercise.name} />
          <Text mt={4}>{exercise.description}</Text>
          <Text mt={2} fontWeight="bold">
            Reps: {exercise.reps}
          </Text>
          <Box mt={4}>
            <Text fontWeight="bold">Stopwatch:</Text>
            {/* <Text>{formatTime(seconds)}</Text> */}
            <CircularProgress value={seconds/60*100}  color='green.400'>
           <CircularProgressLabel>{formatTime(seconds)}</CircularProgressLabel>       
          </CircularProgress>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme={isActive ? 'red' : 'green'}
            onClick={handleToggle}
          >
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button colorScheme="blue" onClick={onClose} ml={2}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExerciseModal;
