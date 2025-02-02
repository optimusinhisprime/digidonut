import { Flex, Box, keyframes, useBreakpointValue } from "@chakra-ui/react";

const dotAnimation = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const Loader = () => {
  const animationDelay = useBreakpointValue({
    base: "0s",
    sm: "0.3s",
    md: "0.6s",
  });

  return (
    <Flex justify="center" align="center" height="160px">
      <Flex justify="space-between" width="70px">
        <Box
          width="10px"
          height="10px"
          borderRadius="50%"
          bgColor="gray.600"
          animation={`${dotAnimation} 1.5s infinite ease-in-out`}
          transitionDelay={animationDelay}
        />
        <Box
          width="10px"
          height="10px"
          borderRadius="50%"
          bgColor="gray.600"
          animation={`${dotAnimation} 1.5s infinite ease-in-out`}
          transitionDelay="0.3s"
        />
        <Box
          width="10px"
          height="10px"
          borderRadius="50%"
          bgColor="gray.600"
          animation={`${dotAnimation} 1.5s infinite ease-in-out`}
          transitionDelay="0.6s"
        />
      </Flex>
    </Flex>
  );
};

export default Loader;
