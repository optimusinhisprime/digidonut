import Navbar from "../components/Navbar/Navbar";
import { Flex } from "@chakra-ui/layout";
import { Stack, Text } from "@chakra-ui/react";
import ServicesOffered from "../components/ContactUsForm/ServicesOffered";
import CustomerBudget from "../components/ContactUsForm/CustomerBudget";
import ProjectDetails from "../components/ContactUsForm/ProjectDetails";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  return (
    <Flex mb="10" direction="column">
      <Navbar />
      <Flex
        mt={["2", "6"]}
        mr="auto"
        ml="auto"
        w={["85%", "60%", "60%"]}
        justifyContent="center"
        direction="column"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Flex mb={["2"]} p={["1", "7"]} textAlign="center" direction="column">
            <Text fontWeight="bold" fontSize={["3xl", "70px"]}>
              Share Your Vision. Let&apos;s Make Digital Magic!
            </Text>
          </Flex>
        </motion.div>
        <Stack spacing="24px" direction="column">
          <ServicesOffered />
          <CustomerBudget />
          <ProjectDetails />
        </Stack>
      </Flex>
    </Flex>
  );
}
