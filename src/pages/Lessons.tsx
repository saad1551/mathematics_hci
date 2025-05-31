import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Progress,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  progress: number;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Counting Numbers',
    description: 'Learn to count from 1 to 100 with fun animations!',
    difficulty: 'Easy',
    progress: 0,
  },
  {
    id: 2,
    title: 'Basic Addition',
    description: 'Master addition with numbers up to 20',
    difficulty: 'Easy',
    progress: 0,
  },
  {
    id: 3,
    title: 'Basic Subtraction',
    description: 'Learn subtraction with numbers up to 20',
    difficulty: 'Easy',
    progress: 0,
  },
  {
    id: 4,
    title: 'Multiplication Tables',
    description: 'Practice multiplication tables from 1 to 10',
    difficulty: 'Medium',
    progress: 0,
  },
  {
    id: 5,
    title: 'Simple Division',
    description: 'Learn division with numbers up to 100',
    difficulty: 'Medium',
    progress: 0,
  },
  {
    id: 6,
    title: 'Word Problems',
    description: 'Solve fun word problems using all operations',
    difficulty: 'Hard',
    progress: 0,
  },
];

const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const difficultyColors = {
    Easy: 'green.500',
    Medium: 'yellow.500',
    Hard: 'red.500',
  };

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="lg"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s' }}
    >
      <VStack spacing={4} align="start">
        <Heading size="md">{lesson.title}</Heading>
        <Text color="gray.600">{lesson.description}</Text>
        <Box w="full">
          <Text mb={2} fontSize="sm" color="gray.500">
            Progress
          </Text>
          <Progress
            value={lesson.progress}
            size="sm"
            colorScheme="brand"
            borderRadius="full"
          />
        </Box>
        <Text
          fontSize="sm"
          color={difficultyColors[lesson.difficulty]}
          fontWeight="bold"
        >
          {lesson.difficulty}
        </Text>
        <Button
          colorScheme="brand"
          variant="solid"
          width="full"
          isDisabled={lesson.progress === 100}
        >
          {lesson.progress === 0 ? 'Start Lesson' : 'Continue Lesson'}
        </Button>
      </VStack>
    </Box>
  );
};

const Lessons = () => {
  const [lessonProgress, setLessonProgress] = useState<Record<number, number>>(
    {}
  );

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
            mb={4}
          >
            Math Lessons
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Choose a lesson to start your math adventure!
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
          px={4}
        >
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Lessons; 