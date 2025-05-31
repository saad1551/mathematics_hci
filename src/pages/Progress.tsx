import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Progress as ChakraProgress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  Badge,
  HStack,
  type ProgressProps,
} from '@chakra-ui/react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  total: number;
  badge: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Addition Master',
    description: 'Complete 10 addition problems',
    progress: 7,
    total: 10,
    badge: '🏆',
  },
  {
    id: 2,
    title: 'Subtraction Pro',
    description: 'Complete 10 subtraction problems',
    progress: 5,
    total: 10,
    badge: '🌟',
  },
  {
    id: 3,
    title: 'Multiplication Wizard',
    description: 'Complete 10 multiplication problems',
    progress: 3,
    total: 10,
    badge: '🎯',
  },
  {
    id: 4,
    title: 'Division Expert',
    description: 'Complete 10 division problems',
    progress: 2,
    total: 10,
    badge: '🎨',
  },
];

const stats = [
  {
    label: 'Total Questions Answered',
    value: '45',
    change: '+12',
  },
  {
    label: 'Correct Answers',
    value: '38',
    change: '+8',
  },
  {
    label: 'Accuracy Rate',
    value: '84%',
    change: '+5%',
  },
  {
    label: 'Time Spent Learning',
    value: '2h 30m',
    change: '+45m',
  },
];

const ProgressPage = () => {
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
            Your Progress
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Track your learning journey!
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {stats.map((stat, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.200"
            >
              <Stat>
                <StatLabel fontSize="lg">{stat.label}</StatLabel>
                <StatNumber fontSize="3xl">{stat.value}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {stat.change}
                </StatHelpText>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>

        <Heading size="lg" mt={8} mb={4}>
          Achievements
        </Heading>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={6}
        >
          {achievements.map((achievement) => (
            <Box
              key={achievement.id}
              p={6}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.200"
            >
              <VStack spacing={4} align="start">
                <HStack spacing={2}>
                  <Text fontSize="2xl">{achievement.badge}</Text>
                  <Heading size="md">{achievement.title}</Heading>
                </HStack>
                <Text color="gray.600">{achievement.description}</Text>
                <Box w="full">
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm" color="gray.500">
                      Progress
                    </Text>
                    <Badge colorScheme="brand">
                      {achievement.progress}/{achievement.total}
                    </Badge>
                  </HStack>
                  <ChakraProgress
                    value={(achievement.progress / achievement.total) * 100}
                    size="sm"
                    colorScheme="brand"
                    borderRadius="full"
                  />
                </Box>
              </VStack>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default ProgressPage; 