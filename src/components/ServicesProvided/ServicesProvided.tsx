import { Flex, Heading } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";

interface ServicesProvidedProps {
  id: string;
}
export default function ServicesProvided({ id }: ServicesProvidedProps) {
  // Define the zoom effect variants

  return (
    <Flex
      id={id}
      flexDir="column"
      textAlign="center"
      bgColor="#BBCBCB"
      color="#262626"
      alignItems="center"
    >
      <Heading size="2xl" mt="10">
        Our Services
      </Heading>

      {/* Wrap each service with motion.div and apply the zoom effect */}

      <Flex
        width="100%"
        padding="20"
        marginBottom={10}
        justifyContent="space-between"
      >
        <ServiceItem serviceName="Static Websites" serviceNum={1} />
        <ServiceItem serviceName="Web Applications" serviceNum={2} />
        <ServiceItem serviceName="Mobile Apps" serviceNum={3} />
        <ServiceItem serviceName="Logo & Branding" serviceNum={4} />
      </Flex>
    </Flex>
  );
}
