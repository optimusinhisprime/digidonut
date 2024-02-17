import { HashLink } from "react-router-hash-link";
import ContactUsModal from "./ContactUsModal";
import { Flex } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Image,
  Text,
  IconButton,
  Hide,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon } from "@chakra-ui/icons"; // Import HamburgerIcon and CloseIcon
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { LuPhoneIncoming } from "react-icons/lu";
import { TbBinaryTree } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";

import SiteLogo from "../../images/site-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex
      flexDir="row"
      p="5"
      bgColor="#000807"
      color={"white"}
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 10, xl: 10, "2xl": 40 }}
    >
      <Flex alignItems="center" cursor="pointer">
        <Image
          boxSize="50px"
          objectFit="cover"
          src={SiteLogo}
          alt="DigiDonut Studio"
        />
        <Hide below="md">
          <Text
            onClick={() => {
              navigate("/");
            }}
            fontSize="large"
            fontFamily="ShantyHouse"
            ml="2"
          >
            igiDonut Studio
          </Text>
        </Hide>
      </Flex>

      <Show below="md">
        <Menu>
          <MenuButton
            _active={{ color: "black" }}
            _focus={{ bgColor: "black" }}
            color="white"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghost"
          />
          <MenuList bgColor="#000807">
            <MenuItem
              onClick={() => navigate("/")}
              bgColor="#000807"
              icon={<AiOutlineHome size={15} />}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/projects")}
              bgColor="#000807"
              icon={<LuLayoutGrid size={15} />}
            >
              Projects
            </MenuItem>

            <MenuItem
              as={HashLink}
              to="/#our-services"
              smooth
              bgColor="#000807"
              icon={<MdWorkspaces size={15} />}
              command="⌘O"
            >
              Our Services
            </MenuItem>
            <MenuItem
              as={ReactRouterLink}
              bgColor="#000807"
              icon={<ChatIcon />}
              command="⌘O"
              to="https://calendly.com/digidonutstudio"
            >
              Book a Meeting
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/contact-us")}
              bgColor="#000807"
              icon={<LuPhoneIncoming size={15} />}
              command="⌘O"
            >
              Contact Us
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/about-us")}
              bgColor="#000807"
              icon={<TbBinaryTree size={15} />}
            >
              About Us
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>

      <Hide below="lg">
        <Flex
          flex={{ base: "column" }}
          w="40%"
          justifyContent={{
            base: "normal",
            xl: "space-evenly",
            "2xl": "space-evenly",
          }}
        >
          <Text
            onClick={() => {
              navigate("/");
            }}
            cursor="pointer"
            fontWeight="semibold"
          >
            Home
          </Text>

          <Text
            cursor="pointer"
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects
          </Text>
          <HashLink to="/#our-services" smooth>
            <Text cursor="pointer">Services</Text>
          </HashLink>

          <Text
            cursor="pointer"
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About Us
          </Text>
        </Flex>
      </Hide>

      <Hide below="md">
        <ContactUsModal />
      </Hide>
    </Flex>
  );
}
