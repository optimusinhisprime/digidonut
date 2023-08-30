import Navbar from "../components/Navbar/Navbar";
import { Flex } from "@chakra-ui/layout";
import { Stack, Text } from "@chakra-ui/react";
import ServicesOffered from "../components/ContactUsForm/ServicesOffered";
import CustomerBudget from "../components/ContactUsForm/CustomerBudget";
import ProjectDetails from "../components/ContactUsForm/ProjectDetails";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [servicesWanted, setServicesWanted] = useState<String[]>([]);
  const [customerBudget, setCustomerBudget] = useState<String>("");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const uploadError = {
    firstName: {
      required: "First name is required",
    },
    lastName: {
      required: "Last name is required",
    },
    companyName: {
      required: "Company name is required",
    },
    companyEmail: {
      required: "Company email is required",
    },
    projectDescription: {
      required: "Give us something to cook with. 😅🧑🏾‍🍳👨🏾‍🍳",
    },
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="24px" direction="column">
            <ServicesOffered setServicesWanted={setServicesWanted} />
            <CustomerBudget setCustomerBudget={setCustomerBudget} />
            <ProjectDetails
              register={register}
              errors={errors}
              uploadErrors={uploadError}
            />
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}
