import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaQuestionCircle, FaChartLine } from 'react-icons/fa';

const FeatureCard = ({
  title,
  description,
  icon,
  to,
}: {
  title: string;
  description: string;
  icon: any;
  to: string;
}) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

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
        <Box
          p={3}
          bg="brand.500"
          color="white"
          borderRadius="full"
          fontSize="2xl"
        >
          {icon}
        </Box>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Button
          as={Link}
          to={to}
          colorScheme="brand"
          variant="solid"
          width="full"
        >
          Start Learning
        </Button>
      </VStack>
    </Box>
  );
};

const Home = () => {
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
            Welcome to Math Adventure!
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Let's make learning math fun and exciting!
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          px={4}
        >
          <FeatureCard
            title="Interactive Lessons"
            description="Learn math through fun and engaging lessons designed just for you!"
            icon={<FaBook />}
            to="/lessons"
          />
          <FeatureCard
            title="Fun Quizzes"
            description="Test your knowledge with exciting quizzes and earn rewards!"
            icon={<FaQuestionCircle />}
            to="/quiz"
          />
          <FeatureCard
            title="Track Progress"
            description="See how much you've learned and celebrate your achievements!"
            icon={<FaChartLine />}
            to="/progress"
          />
        </Grid>
      </VStack>
    </Container>
  );
};

export default Home; 