import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  Stack,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function ContactUsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Button
        w={["15%"]}
        borderRadius="full"
        _hover={{
          color: "blue",
        }}
        onClick={onOpen}
        m={4}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? "Lets Talk" : "Start New Project"}
      </Button>

      <Modal onClose={onClose} size="6xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent background="">
          <ModalCloseButton color="white" />
          <ModalBody
            borderRadius="3xl"
            p={["4", "10"]}
            bgColor="#161616"
            color="white"
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex p={["4", "10"]} textAlign="center" direction="column">
                <Text fontWeight="semibold" fontSize={["3xl", "6xl"]}>
                  Drop Us a Line. Share Your Vision.
                </Text>
                <Text fontWeight="semibold" fontSize={["3xl", "6xl"]}>
                  Let&apos;s Make Digital Magic!
                </Text>
              </Flex>

              <Text mt="2" textAlign="center" w="80%" fontSize={["sm", "lg"]}>
                Whether you&apos;re aiming to make a lasting impact through a
                long-term collaboration or seeking the ideal partner for your
                project, we&apos;ve got the perfect plan to cater to your unique
                needs.
              </Text>

              <Stack
                w={["100%", "70%"]}
                mt="10"
                spacing={4}
                direction="row"
                align="center"
              >
                <ChakraLink
                  _hover={{
                    textDecoration: "none",
                    // bgColor: "red",
                  }}
                  as={ReactRouterLink}
                  borderRadius={["3xl", "full"]}
                  fontSize={["sm", "lg"]}
                  fontWeight={["light", "semibold"]}
                  w="100%"
                  p={["2", "5"]}
                  isExternal
                  bgColor="teal"
                  textAlign="center"
                  to="https://calendly.com/digidonutstudio"
                >
                  Book a Meeting
                </ChakraLink>
                <ChakraLink
                  _hover={{
                    textDecoration: "none",
                    // bgColor: "red",
                  }}
                  as={ReactRouterLink}
                  borderRadius={["3xl", "full"]}
                  fontSize={["sm", "lg"]}
                  fontWeight={["light", "semibold"]}
                  w="100%"
                  p={["2", "5"]}
                  bgColor="teal"
                  textAlign="center"
                  to="/contact-us"
                >
                  Write to DigiDonut
                </ChakraLink>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
