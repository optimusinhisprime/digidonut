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
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();
  const [servicesWanted, setServicesWanted] = useState([""]);
  const [customerBudget, setCustomerBudget] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const navigate = useNavigate();

  const s3 = new AWS.S3();

  const onSubmit = async (data: any) => {
    console.log(data);
    if (!data["h-captcha-response"]) {
      alert("Please complete the captcha before submitting the form.");
      return;
    }
    // Upload files to S3 bucket
    const uploadPromises = selectedFiles.map(async (file) => {
      const params = {
        Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
        Key: `${data.companyName}/${file.name}`, // Specify the folder and file name in the bucket
        Body: file,
        ACL: "public-read", // Set file permissions
      };

      try {
        const uploadResult = await s3.upload(params as any).promise();
        return uploadResult.Location; // Return the S3 object URL
      } catch (error) {
        console.error("Error uploading file to S3:", error);
        throw error; // Rethrow error to handle in catch block below
      }
    });

    // Wait for all uploads to complete
    const uploadedFiles = await Promise.all(uploadPromises);
    const fileLinks = uploadedFiles.map((url: string) => `- ${url}`).join("\n");

    // Include S3 URLs in the data object
    data.projectFiles = fileLinks;
    data.servicesWanted = servicesWanted;
    data.customerBudget = customerBudget;

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          console.log(json);
          toast({
            title: "Details Sent",
            description: "Your Project Details Have Been Sent for Review.",
            status: "success",
            duration: 7000,
            isClosable: true,
          });

          navigate("/");
        } else {
          console.log(json);
          toast({
            title: "Details Failed to Submit",
            description: "Failed to Send Project Details for Review.",
            status: "error",
            duration: 7000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Details Failed to Submit",
          description:
            "Encountered an error while sending your project details. Please try again later.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
        console.log(error);
      });
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
          <input
            type="hidden"
            value={process.env.REACT_APP_WEB3FORM_API}
            {...register("access_key")}
          />

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
              isSubmitting={isSubmitting}
              setValue={setValue}
            />
          </Stack>
        </form>
      </Flex>
      <Footer />
    </Flex>
  );
}
