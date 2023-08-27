import Navbar from "../components/Navbar/Navbar";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import ServicesOffered from "../components/ContactUsForm/ServicesOffered";
import CustomerBudget from "../components/ContactUsForm/CustomerBudget";
import ProjectDetails from "../components/ContactUsForm/ProjectDetails";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex
        mt="10"
        mr="auto"
        ml="auto"
        w={["70%", "60%", "60%"]}
        justifyContent="center"
        direction="column"
      >
        <Flex p={["4", "7"]} textAlign="center" direction="column">
          <Text fontWeight="bold" fontSize={["3xl", "70px"]}>
            Share Your Vision. Let&apos;s Make Digital Magic!
          </Text>
        </Flex>
        <ServicesOffered />
        <CustomerBudget />
        <ProjectDetails />
      </Flex>
    </Flex>
  );
}
