// TeamMember.tsx
import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <Image
        src={image}
        alt={name}
        mb="4"
        borderRadius="full"
        boxShadow="base"
        boxSize="150px"
        objectFit="cover"
        mx="auto"
      />
      <VStack spacing="2" textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {role}
        </Text>
      </VStack>
    </Box>
  );
};

export default TeamMember;
