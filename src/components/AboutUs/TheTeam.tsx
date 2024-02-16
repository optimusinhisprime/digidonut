import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TeamMember from "./TeamMember";
import CEOImage from "../../images/ceo-image.jpg";

export default function TheTeam() {
  const teamMembers = [
    {
      name: "Phomolo Phiri",
      role: "CEO",
      image: CEOImage,
    },

    // Add more team members as needed
  ];
  return (
    <Box py="16">
      <Heading mb="8" textAlign="center">
        Meet the Team
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
