import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Project1 from "../../images/project1.jpg";
import Project2 from "../../images/project2.jpg";
import Project3 from "../../images/project3.jpg";
import Project4 from "../../images/project4.jpg";

import PortfolioProject from "../PortfolioProject";

interface HeroProps {
  id: string;
}

const projectOneServicesRendered = ["Branding, Consultancy"];
const projectTwoServicesRendered = ["Website, Branding"];
const projectThreeServicesRendered = [" Consultancy"];
const projectFourServicesRendered = ["Mobile App, Branding"];

export default function Hero({ id }: HeroProps) {
  return (
    <Flex
      px={{ "2xl": "40" }}
      id={id}
      bgColor="#000807"
      color="#F2F4F3"
      flexDir={"column"}
    >
      <Flex mt="5" flexDir={"column"}>
        <Flex
          mx={["10", "10"]}
          my={2}
          textAlign={"start"}
          flexDir="column"
          w={{
            base: "80%",
            sm: "80%",
            md: "58%",
            lg: "65%",
            xl: "80%",
            "2xl": "70%",
          }}
        >
          <Heading
            letterSpacing={3}
            fontFamily="Lure"
            my="3"
            textAlign={{ base: "start", xl: "start", "2xl": "start" }}
            size={{ base: "sm", sm: "lg", xl: "4xl", "2xl": "4xl", lg: "xl" }}
          >
            A Design and Development Studio for Your Startups Success.
          </Heading>
          <Text fontSize={{ base: "sm", xl: "lg", "2xl": "large" }} mt="5">
            Secure Your Place, Design Your Tomorrow With Us —
          </Text>
          <Text mb="5" fontSize={{ base: "sm", xl: "lg", "2xl": "large" }}>
            Let Your Ideas Find A Home and Take Shape.
          </Text>
        </Flex>
        <Box mx="10" textAlign="start">
          <Heading textDecoration="underline" size={["sm", "md"]}>
            Our Latest Engagements:
          </Heading>
        </Box>
        <Flex
          justifyContent={"space-between"}
          mx="10"
          my={10}
          flexDir="row"
          flexWrap={{ base: "wrap" }}
        >
          <PortfolioProject
            imageSrc={Project1}
            projectNum="00-1"
            servicesRendered={projectOneServicesRendered}
            companyName="Sunrise Financial Group"
          />
          <PortfolioProject
            imageSrc={Project2}
            projectNum="00-2"
            servicesRendered={projectTwoServicesRendered}
            companyName="Serenity Spa Retreat"
          />
          <PortfolioProject
            imageSrc={Project3}
            projectNum="00-3"
            servicesRendered={projectThreeServicesRendered}
            companyName="Ruma Energy"
          />
          <PortfolioProject
            imageSrc={Project4}
            projectNum="00-4"
            servicesRendered={projectFourServicesRendered}
            companyName="VoxAI"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
