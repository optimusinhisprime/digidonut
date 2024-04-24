import { Divider, Flex, IconButton, Text, Box, Show } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImArrowDownRight2 } from "react-icons/im";
import Service from "./Service";
import { Link } from "react-router-dom";

interface WhyUsProps {
  id: string;
}

// const servicesProvided = [
//   {
//     servicesTitle: "Branding, Strategy & Identity Design",
//     serviceDescription:
//       "We design logos, brand identities, and visual systems that tell your unique story and captivate your audience.",
//   },
//   {
//     servicesTitle: "Cross Platform App Development",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     servicesTitle: "Web Sites & Web Applications",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     servicesTitle: "Consultancy",
//     serviceDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
// ];

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
        <Link to="">
          <IconButton
            borderRadius="100%"
            _hover={{
              color: "#1985A1",
            }}
            aria-label="LinkedIn Icon"
            icon={<FaLinkedinIn size={20} />}
          />
        </Link>

        <Link to="">
          <IconButton
            borderRadius="100%"
            _hover={{
              color: "#2191FB",
            }}
            aria-label="Facebook Icon"
            icon={<FaFacebook size={20} />}
          />
        </Link>

        <Link to="">
          <IconButton
            borderRadius="100%"
            aria-label="Twitter Icon"
            _hover={{
              color: "#00A6FB",
            }}
            icon={<FaTwitter size={20} />}
          />
        </Link>

        <Link to="https://www.instagram.com/digidonutstudio/">
          <IconButton
            borderRadius="100%"
            _hover={{
              color: "#FF5A5F",
            }}
            aria-label="Instagram Icon"
            icon={<FaInstagram size={20} />}
          />
        </Link>
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
              serviceTitle="Branding, Strategy & Identity Design"
              serviceDescription="We design logos, brand identities, and visual systems that tell your unique story and captivate your audience."
            />
            <Service
              serviceTitle="Cross Platform App Development"
              serviceDescription="Develop mobile apps that work seamlessly across iOS, Android, and other platforms."
            />
          </Flex>
          <Box>
            <Divider bgColor="#000807" mx="3" orientation="vertical" w="0.5" />
          </Box>
          <Flex mx="5" flexDirection="column">
            <Service
              serviceTitle="Web Sites & Web Applications"
              serviceDescription="Design and develop user-friendly websites and web applications that drive results."
            />
            <Service
              serviceTitle="Consultancy"
              serviceDescription="We help you choose the right technology solutions for your business goals."
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
