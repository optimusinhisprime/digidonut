import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HumanMachineCollaboImage from "../../images/digital-marketing-specialist-giving-a-presentation.png";
import HappyClient from "../../images/employee-life-cycle.png";
import ClientCollaboration from "../../images/people-and-technology.png";
import HappyUser from "../../images/gender-equality-week.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <Flex id={id} bgColor="#BBCBCB" flexDir="row" color="#01110A">
      <Flex flexDir="column">
        <Box ml="5" boxSize="sm">
          <Image src={HappyClient} />
        </Box>
        <Box ml="10" boxSize="xs">
          <Image src={ClientCollaboration} />
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="60%"
        textAlign="center"
        flexDir="column"
      >
        <Heading size="3xl">
          Elevate Your Brand with Stunning Design & Tech Expertise
        </Heading>
        <Text mt="5" w="80%">
          We believe in the transformative potential of technology and design,
          and we're here to harness it on your behalf.
        </Text>
        <Button
          as={ReactRouterLink}
          rightIcon={<AiOutlineArrowRight />}
          colorScheme="teal"
          variant="solid"
          borderRadius="full"
          size="lg"
          w="60%"
          to="/contact-us"
          mt="10"
        >
          Let&apos;s Get Started
        </Button>
      </Flex>
      <Flex flexDir="column">
        <Box mt="10" mr="10" boxSize="xs">
          <Image src={HumanMachineCollaboImage} />
        </Box>
        <Box mt="10" boxSize="xs">
          <Image src={HappyUser} />
        </Box>
      </Flex>
    </Flex>
  );
}
