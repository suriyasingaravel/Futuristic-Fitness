import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Image, Text, Button, Skeleton, Alert, AlertIcon } from '@chakra-ui/react';
import ExerciseModal from '../Components/ExcerciseModal';

const Beginner = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          'https://mock-fitness-api.onrender.com/beginner'
        );
        setExercises(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const handleOpenModal = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
    setIsModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" my={4}>
          Beginner Exercises
        </Text>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" my={4}>
                <Skeleton height="200px" />
                <Box p={4}>
                  <Skeleton height="20px" mb={2} />
                  <Skeleton height="30px" width="50%" />
                </Box>
              </Box>
            ))
          ) : error ? (
            <Alert status="error" borderRadius="lg" my={4}>
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            exercises.map((exercise) => (
              <Box
                key={exercise.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                my={4}
              >
                <Image paddingTop= "15px" width="90%" margin="auto" src={exercise.image} alt={exercise.name} />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="semibold">
                    {exercise.name}
                  </Text>
                  <Button
                    colorScheme="blue"
                    mt={2}
                    onClick={() => handleOpenModal(exercise)}
                  >
                    See More
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Grid>
        {selectedExercise && (
          <ExerciseModal
            exercise={selectedExercise}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Box>
    </div>
  );
};

export default Beginner;
