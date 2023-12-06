import { Flex, Heading, Text } from "@chakra-ui/react";
import SpecializationCardImage from "../../images/browser-window-displaying-workspace.png";
import TailoredSolutionsImage from "../../images/person-shopping-online.png";
import InnovationCardImage from "../../images/people-and-design.png";
import CompanyValue from "./CompanyValue";

interface WhyUsProps {
  id: string;
}

export default function WhyUs({ id }: WhyUsProps) {
  return (
    <Flex
      id={id}
      pt="20"
      alignItems="center"
      bgColor="#F2F4F3"
      flexDir="column"
      textAlign="center"
      pb="20"
      color="#262626"
    >
      <Heading size="2xl">Why Us</Heading>
      <Text fontSize="md" mt="5" w="55%">
        We understand that your success is our success, and we're committed to
        providing the creative solutions that drive your business forward.
      </Text>
      <Flex mt="10" w="90%" justifyContent="space-between">
        <CompanyValue
          imageSrc={TailoredSolutionsImage}
          title="Tailored Solutions"
          description="We understand that every business is unique. That's why we take a
            customized approach to every project. Our solutions are tailored to
            your specific needs, ensuring that they align perfectly with your
            vision."
        />
        <CompanyValue
          imageSrc={SpecializationCardImage}
          title="Specialization in Comprehensive Services"
          description="Our team specializes in a wide range of services that are essential
            for your digital success, including logo design, branding, websites,
            web applications, mobile apps, and desktop app design. We offer a
            one-stop solution for all your digital needs."
        />
        <CompanyValue
          imageSrc={InnovationCardImage}
          title="Expertise, Creativity & Innovation"
          description="We pride ourselves on staying at the forefront of technology and
            design trends. Our experts are constantly exploring new avenues to
            keep your business ahead of the curve."
        />
      </Flex>
    </Flex>
  );
}
