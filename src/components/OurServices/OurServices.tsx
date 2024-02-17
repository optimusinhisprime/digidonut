import { Divider, Flex, IconButton, Text, Box, Show } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImArrowDownRight2 } from "react-icons/im";
import Service from "./Service";

interface WhyUsProps {
  id: string;
}

const servicesProvided = [
  {
    servicesTitle: "Branding & Identity Design",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    servicesTitle: "Cross Platform App Development",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    servicesTitle: "Web Sites & Web Applications",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    servicesTitle: "Consultancy",
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function OurServices({ id }: WhyUsProps) {
  return (
    <Flex
      id={id}
      pt="5"
      alignItems="center"
      bgColor="#F2F4F3"
      flexDir="column"
      textAlign="center"
      pb="20"
      color="#262626"
    >
      <Flex
        p={5}
        justifyContent={["center", "center", "space-between"]}
        w="30%"
      >
        <IconButton
          borderRadius="100%"
          aria-label="LinkedIn Icon"
          icon={<FaLinkedinIn size={20} />}
        />
        <IconButton
          borderRadius="100%"
          aria-label="Facebook Icon"
          icon={<FaFacebook size={20} />}
        />
        <IconButton
          borderRadius="100%"
          aria-label="Twitter Icon"
          icon={<FaTwitter size={20} />}
        />
        <IconButton
          borderRadius="100%"
          aria-label="Instagram Icon"
          icon={<FaInstagram size={20} />}
        />
      </Flex>

      <Box textAlign="center" w="50%">
        <Divider bgColor="#000807" />
      </Box>
      <Text fontSize="md" mt="5" w={["90%", "80%", "50%"]}>
        We understand that your success is our success, and we're committed to
        providing the creative solutions that drive your business forward.
      </Text>
      <Box mt="2" w="90%">
        <Divider h="0.5" bgColor="#000807" />
      </Box>
      <Flex
        justifyContent="center"
        flexDir={["column", "column", "row"]}
        mt={["5", "3", "10"]}
        mx={["0", "10", "20"]}
      >
        <Flex
          w={["100%", "100%", "100%"]}
          alignItems={["center", "start"]}
          justifyContent={["space-around", "space-around", "space-between"]}
        >
          <Show above="md">
            <Text fontWeight="semibold" fontSize={20}>
              (What We Do)
            </Text>
            <IconButton
              variant="ghost"
              mr={10}
              borderRadius="100%"
              aria-label="Arrow Pointing to Services"
              icon={<ImArrowDownRight2 size={20} />}
            />
          </Show>
          <Show below="md">
            <Text my="3" fontWeight="bold" fontSize={{ base: 18, sm: 25 }}>
              (Services Provided)
            </Text>
          </Show>
        </Flex>
        <Box>
          <Divider bgColor="#000807" mx="2" orientation="vertical" w="0.5" />
        </Box>

        <Flex flexDirection={["column", "column", "row"]}>
          <Flex mx="5" flexDirection="column">
            <Service
              serviceTitle="Branding & Identity Design"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Service
              serviceTitle="Cross Platform App Development"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          </Flex>
          <Box>
            <Divider bgColor="#000807" mx="3" orientation="vertical" w="0.5" />
          </Box>
          <Flex mx="5" flexDirection="column">
            <Service
              serviceTitle="Web Sites & Web Applications"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Service
              serviceTitle="Consultancy"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
