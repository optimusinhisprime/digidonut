import React from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { Box, Text, Heading, List, ListItem, Image } from "@chakra-ui/react";

// Custom components for rendering different types of content
const customComponents = {
  types: {
    image: ({ value }: any) => (
      <Box my={6} textAlign="center">
        <Image
          src={value?.asset?.url}
          alt={value?.alt || "Image"}
          maxWidth="100%"
          borderRadius="lg"
        />
      </Box>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <Text fontSize="lg" lineHeight="tall" my={4}>
        {children}
      </Text>
    ),
    h1: ({ children }: any) => (
      <Heading as="h1" size="2xl" mb={4}>
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading as="h2" size="xl" mb={4}>
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading as="h3" size="lg" mb={4}>
        {children}
      </Heading>
    ),
    h4: ({ children }: any) => (
      <Heading as="h4" size="md" mb={4}>
        {children}
      </Heading>
    ),
    blockquote: ({ children }: any) => (
      <Box
        borderLeftWidth="4px"
        borderColor="gray.300"
        pl={4}
        my={6}
        fontStyle="italic"
        color="gray.600"
        bgColor="gray.50"
      >
        {children}
      </Box>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <List styleType="disc" ml={8} my={4}>
        {children}
      </List>
    ),
    number: ({ children }: any) => (
      <List styleType="decimal" ml={8} my={4}>
        {children}
      </List>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <ListItem fontSize="lg" lineHeight="tall" my={2}>
        {children}
      </ListItem>
    ),
    number: ({ children }: any) => (
      <ListItem fontSize="lg" lineHeight="tall" my={2}>
        {children}
      </ListItem>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <Text as="strong" fontWeight="bold">
        {children}
      </Text>
    ),
    em: ({ children }: any) => (
      <Text as="em" fontStyle="italic">
        {children}
      </Text>
    ),
  },
};

interface Props {
  value: PortableTextBlock[];
}

export default function PortableTextComponent({ value }: Props) {
  return (
    <Box maxW="4xl" mx="auto" px={{ base: 4, md: 8 }}>
      <PortableText value={value} components={customComponents} />
    </Box>
  );
}
