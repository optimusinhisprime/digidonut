import {
  Box,
  VStack,
  HStack,
  Badge,
  Heading,
  Flex,
  useColorModeValue,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readTime: number;
    imageUrl: string;
    slug: string;
  };
}
export const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <Box
        key={post.id}
        bg={cardBg}
        rounded="lg"
        shadow="md"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{ shadow: "lg" }}
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          h="200px"
          w="full"
          objectFit="cover"
        />
        <VStack p={6} align="stretch" spacing={4}>
          <HStack spacing={4}>
            <Badge colorScheme="blue">{post.category}</Badge>
            <Text fontSize="sm" color={textColor}>
              {post.readTime} mins(s)
            </Text>
          </HStack>

          <Heading as="h2" size="md" color={headingColor}>
            {post.title}
          </Heading>

          <Text color={textColor} noOfLines={2}>
            {post.excerpt}
          </Text>

          <Flex justify="space-between" fontSize="sm" color={textColor}>
            <Text>By {post.author}</Text>
            <Text>{new Date(post.date).toLocaleDateString()}</Text>
          </Flex>
        </VStack>
      </Box>
    </Link>
  );
};
