import React, { useEffect, useState } from "react";
import {
  Grid,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { BlogPostCard } from "../components/Blog/BlogPostCard";
import client, { urlFor } from "../sanity/client";
import { Post } from "../types";
import Footer from "../components/Footer/Footer";
import BlogLoader from "../components/Blog/AnimatedBlogLoader";

const CATEGORIES = ["All", "Tech", "Business", "Lifestyle", "Design"];

export default function SiteBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  useEffect(() => {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      author,
      publishedAt,
      image,
      excerpt,
      category,
      readTime,
      body
    }`;

    client
      // @ts-ignore
      .fetch<Post[]>(query)
      // @ts-ignore
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log(posts);

  return (
    <Flex flexDir="column" minH="100vh" bgColor="#F2F4F3">
      {/* Navbar Section */}
      <Flex
        px={{ base: "4", md: "8", lg: "12", "2xl": "40" }}
        bgColor="#000807"
        flexDir="column"
      >
        <Navbar />
      </Flex>

      {/* Header Section */}
      <Flex
        px={{ base: "4", md: "8", lg: "12", "2xl": "40" }}
        flexDir="column"
        justifyContent="center"
        py={{ base: 10, md: 16 }}
        textAlign="center"
      >
        <Heading as="h1" size={["xl", "2xl"]} color={headingColor}>
          The Studios Journal
        </Heading>
        <Text
          my={5}
          fontSize={["md", "lg", "xl"]}
          color={textColor}
          mx="auto"
          maxW="container.md"
        >
          From the Heart of Digidonut: Stories, Strategies, and Innovation
        </Text>
      </Flex>

      {/* Search and Filter Section */}
      <Stack
        direction="column"
        justify="space-between"
        align="center"
        px={{ base: "4", md: "8", lg: "12", "2xl": "40" }}
        spacing={4}
      >
        {/* Search Bar */}
        <Input
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          borderWidth={2}
          borderColor="#000807"
          size="md"
          width={{ base: "100%", md: "50%" }}
        />

        {/* Category Filter */}
        <HStack py={5} spacing={2} wrap="wrap" justify="center">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => setSelectedCategory(category)}
              mb={{ base: 2, md: 0 }}
            >
              {category}
            </Button>
          ))}
        </HStack>
      </Stack>

      {/* Blog Posts Grid */}
      <Flex
        px={{ base: "4", md: "8", lg: "12", "2xl": "40" }}
        py={{ base: 8, md: 12 }}
        flex="1"
      >
        {loading ? (
          <BlogLoader />
        ) : (
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
            width="100%"
          >
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post._id}
                post={{
                  id: post._id,
                  title: post.title,
                  excerpt: post.excerpt,
                  author: post.author,
                  date: new Date(post.publishedAt).toDateString(),
                  category: post.category,
                  readTime: post.readTime,
                  imageUrl: urlFor(post.image.asset),
                  slug: post.slug.current,
                }}
              />
            ))}
          </Grid>
        )}
      </Flex>
      <Footer />
    </Flex>
  );
}
