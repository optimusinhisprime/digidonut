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
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function ContactUsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Button
        w="15%"
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
          <ModalBody borderRadius="3xl" p="10" bgColor="#161616" color="white">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex p="10" textAlign="center" direction="column">
                <Text fontWeight="semibold" fontSize="6xl">
                  Drop Us a Line. Share Your Vision.
                </Text>
                <Text fontWeight="semibold" fontSize="6xl">
                  Let&apos;s Make Digital Magic!
                </Text>
              </Flex>

              <Text mt="2" textAlign="center" w="80%" fontSize="lg">
                Whether you&apos;re aiming to make a lasting impact through a
                long-term collaboration or seeking the ideal partner for your
                project, we&apos;ve got the perfect plan to cater to your unique
                needs.
              </Text>

              <Stack mt="10" spacing={4} direction="row" align="center">
                <Button borderRadius="full" colorScheme="teal" size="lg">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://calendly.com/digidonutstudio"
                  >
                    Book a Meeting
                  </a>
                </Button>
                <Button
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                  borderRadius="full"
                  colorScheme="teal"
                  size="lg"
                >
                  Write to DigiDonut
                </Button>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
