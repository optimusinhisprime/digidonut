import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

interface FeaturedPostProps {
  post: {
    title: string;
    excerpt: string;
    slug: string;
  };
}
export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        minH="150px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minW={["20%", "30%"]}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)", // ✅ Slight scale-up effect
          boxShadow: "lg", // ✅ Adds a soft shadow
          bgColor: "gray.800", // ✅ Changes background slightly
        }}
      >
        <Heading size={["sm", "md"]} color="#F2F4F3">
          {post.title}
        </Heading>
        <Text mt={2} fontSize="sm" color="gray.400">
          {post.excerpt}
        </Text>
      </Box>
    </Link>
  );
};
