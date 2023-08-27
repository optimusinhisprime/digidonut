import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

export default function ContactUsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Button
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
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis. Sunt ad dolore quis aute consequat.
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam. Est velit labore esse esse
              cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea
              laboris adipisicing aliqua proident occaecat do do adipisicing
              adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse.
              Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit
              esse pariatur sit adipisicing sunt excepteur enim. Incididunt duis
              commodo mollit esse veniam non exercitation dolore occaecat ea
              nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat
              in magna non consectetur proident fugiat. Commodo magna et aliqua
              elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est
              eiusmod commodo occaecat consequat laboris est do duis. Enim
              incididunt non culpa velit quis aute in elit magna ullamco in
              consequat ex proident. Dolore incididunt mollit fugiat pariatur
              cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat
              duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident
              adipisicing tempor tempor qui pariatur voluptate dolor do ea
              commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis
              elit. Cillum proident veniam cupidatat pariatur laborum tempor
              cupidatat anim eiusmod id nostrud pariatur tempor reprehenderit.
              Do esse ullamco laboris sunt proident est ea exercitation
              cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur
              veniam voluptate cillum. Dolor consequat cillum tempor laboris
              mollit laborum reprehenderit reprehenderit veniam aliqua deserunt
              cupidatat consequat id. Est id tempor excepteur enim labore sint
              aliquip consequat duis minim tempor proident. Dolor incididunt
              aliquip minim elit ea. Exercitation non officia eu id. Ipsum ipsum
              consequat incididunt do aliquip pariatur nostrud. Qui ut sint
              culpa labore Lorem. Magna deserunt aliquip aute duis consectetur
              magna amet anim. Magna fugiat est nostrud veniam. Officia duis ea
              sunt aliqua.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
