import Navbar from "../components/Navbar/Navbar";
import { Flex } from "@chakra-ui/layout";
import { Stack, Text } from "@chakra-ui/react";
import ServicesOffered from "../components/ContactUsForm/ServicesOffered";
import CustomerBudget from "../components/ContactUsForm/CustomerBudget";
import ProjectDetails from "../components/ContactUsForm/ProjectDetails";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export interface ServicesWanted {
  logoBranding: boolean;
  website: boolean;
  mobileApp: boolean;
  development: boolean;
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [servicesWanted, setServicesWanted] = useState<ServicesWanted>({
    logoBranding: false,
    website: false,
    mobileApp: false,
    development: false,
  });
  const [customerBudget, setCustomerBudget] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onSubmit = (data: any) => {
    data.projectFiles = selectedFiles;
    data.customerBudget = customerBudget;
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
    <Flex color="#01110A" direction="column">
      <Navbar />
      <Flex
        mt={["2", "6"]}
        mr="auto"
        ml="auto"
        w={["85%", "60%", "60%"]}
        justifyContent="center"
        direction="column"
      >
        <Flex mb={["2"]} p={["1", "7"]} textAlign="center" direction="column">
          <Text fontWeight="bold" fontSize={["3xl", "60px"]}>
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
              uploadErrors={uploadError}
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
