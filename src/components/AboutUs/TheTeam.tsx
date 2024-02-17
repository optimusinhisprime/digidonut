import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TeamMember from "./TeamMember";
import CEOImage from "../../images/ceo-image.jpg";

export default function TheTeam() {
  const teamMembers = [
    {
      name: "Phomolo Phiri",
      role: "Founding Partner",
      image: CEOImage,
    },
    {
      name: "Will Kwelagobe",
      role: "Coding Partner",
      image: CEOImage,
    },
    {
      name: "Pelonomi Phiri",
      role: "Design Partner",
      image: CEOImage,
    },

    // Add more team members as needed
  ];
  return (
    <Box mx={{ "2xl": 20, xl: 10 }} py="10">
      <Heading mb="8" textAlign="center" size={["xl", "2xl", "2xl"]}>
        Meet the Team
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 2, md: 2, lg: 3 }} spacing="4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
