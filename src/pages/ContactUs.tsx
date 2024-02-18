import Navbar from "../components/Navbar/Navbar";
import { Flex } from "@chakra-ui/layout";
import { Stack, Text, useToast } from "@chakra-ui/react";
import ServicesOffered from "../components/ContactUsForm/ServicesOffered";
import CustomerBudget from "../components/ContactUsForm/CustomerBudget";
import ProjectDetails from "../components/ContactUsForm/ProjectDetails";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();
  const [servicesWanted, setServicesWanted] = useState([""]);
  const [customerBudget, setCustomerBudget] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    data.projectFiles = selectedFiles;
    data.servicesWanted = servicesWanted;
    data.customerBudget = customerBudget;
    toast({
      title: "Details Sent",
      description: "Your Project Details Have Been Sent for Review.",
      status: "success",
      duration: 7000,
      isClosable: true,
    });
    navigate("/");
  };

  const uploadErrors = {
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
    <Flex color="#01110A" direction="column">
      <Navbar />
      <Flex
        mt={["2", "6"]}
        mr="auto"
        ml="auto"
        w={{ base: "85%", lg: "60%", xl: "60%", "2xl": "50%" }}
        justifyContent="center"
        direction="column"
      >
        <Flex mb={["2"]} p={["1", "7"]} textAlign="center" direction="column">
          <Text fontWeight="bold" fontSize={["xl", "3xl", "4xl", "60px"]}>
            Share Your Vision. Let&apos;s Make Digital Magic!
          </Text>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="24px" direction="column">
            <ServicesOffered setServicesWanted={setServicesWanted} />
            <CustomerBudget
              register={register}
              setCustomerBudget={setCustomerBudget}
            />
            <ProjectDetails
              register={register}
              errors={errors}
              uploadErrors={uploadErrors}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </Stack>
        </form>
      </Flex>
      <Footer />
    </Flex>
  );
}
