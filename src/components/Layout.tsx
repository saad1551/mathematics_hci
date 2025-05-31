import { Box, Container, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaQuestionCircle, FaChartLine } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const NavItem = ({ to, icon, label }: { to: string; icon: any; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? 'brand.500' : 'transparent'}
        color={isActive ? 'white' : 'gray.600'}
        _hover={{
          bg: 'brand.500',
          color: 'white',
        }}
      >
        <Icon
          mr="4"
          fontSize="16"
          as={icon}
        />
        <Text fontSize="lg">{label}</Text>
      </Flex>
    </Link>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh">
      <Flex>
        {/* Sidebar */}
        <Box
          w="250px"
          h="100vh"
          bg="white"
          borderRight="1px"
          borderColor="gray.200"
          position="fixed"
        >
          <VStack spacing={1} align="stretch" py={5}>
            <NavItem to="/" icon={FaHome} label="Home" />
            <NavItem to="/lessons" icon={FaBook} label="Lessons" />
            <NavItem to="/quiz" icon={FaQuestionCircle} label="Quiz" />
            <NavItem to="/progress" icon={FaChartLine} label="Progress" />
          </VStack>
        </Box>

        {/* Main Content */}
        <Box ml="250px" w="calc(100% - 250px)">
          <Container maxW="container.xl" py={8}>
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout; 