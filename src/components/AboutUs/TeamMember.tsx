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
    <Box overflow="hidden">
      <Image
        src={image}
        alt={name}
        mb="4"
        borderRadius="full"
        boxShadow="base"
        boxSize={{ "2xl": "300px", xl: "250px", sm: "150px", base: "90px" }}
        objectFit="cover"
        mx="auto"
      />
      <VStack spacing="2" textAlign="center">
        <Text fontSize={["sm", "lg", "xl"]} fontWeight="bold">
          {name}
        </Text>
        <Text color="gray.500" fontSize={["sm", "md", "lg"]}>
          {role}
        </Text>
      </VStack>
    </Box>
  );
};

export default TeamMember;
