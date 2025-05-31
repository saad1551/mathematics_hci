import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Radio,
  RadioGroup,
  useToast,
  Progress,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What is 5 + 7?',
    options: ['10', '12', '14', '15'],
    correctAnswer: 1,
    explanation: '5 + 7 = 12. You can count up from 5 by 7 more numbers to get 12.',
  },
  {
    id: 2,
    question: 'What is 10 - 4?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: '10 - 4 = 6. You can count down from 10 by 4 numbers to get 6.',
  },
  {
    id: 3,
    question: 'What is 3 × 4?',
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    explanation: '3 × 4 = 12. This means 3 groups of 4, which equals 12.',
  },
  {
    id: 4,
    question: 'What is 15 ÷ 3?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '15 ÷ 3 = 5. This means if you divide 15 into 3 equal groups, each group has 5.',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const toast = useToast();

  const handleAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: 'Please select an answer',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxW="container.md">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
            mb={4}
          >
            Math Quiz
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Test your math skills!
          </Text>
        </Box>

        <Box>
          <HStack justify="space-between" mb={4}>
            <Text>Question {currentQuestion + 1} of {questions.length}</Text>
            <Text>Score: {score}</Text>
          </HStack>
          <Progress value={progress} size="sm" colorScheme="brand" mb={8} />
        </Box>

        <Box
          p={8}
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <VStack spacing={6} align="stretch">
            <Heading size="md">{questions[currentQuestion].question}</Heading>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onChange={(value) => setSelectedAnswer(parseInt(value))}
            >
              <VStack spacing={4} align="stretch">
                {questions[currentQuestion].options.map((option, index) => (
                  <Radio
                    key={index}
                    value={index.toString()}
                    isDisabled={showExplanation}
                  >
                    {option}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>

            {showExplanation && (
              <Box
                p={4}
                bg={
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'green.50'
                    : 'red.50'
                }
                borderRadius="md"
              >
                <HStack spacing={2} color={
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'green.500'
                    : 'red.500'
                }>
                  <Icon
                    as={
                      selectedAnswer === questions[currentQuestion].correctAnswer
                        ? FaCheck
                        : FaTimes
                    }
                  />
                  <Text>
                    {questions[currentQuestion].explanation}
                  </Text>
                </HStack>
              </Box>
            )}

            <Button
              colorScheme="brand"
              onClick={showExplanation ? handleNext : handleAnswer}
              isDisabled={selectedAnswer === null && !showExplanation}
            >
              {showExplanation
                ? currentQuestion < questions.length - 1
                  ? 'Next Question'
                  : 'Finish Quiz'
                : 'Check Answer'}
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Quiz; 