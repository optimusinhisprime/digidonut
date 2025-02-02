import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client, { urlFor } from "./../sanity/client";
import PortableTextComponent from "../components/Blog/PortableTextBody";
import {
  Box,
  Container,
  Text,
  Heading,
  Image,
  Flex,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spinner,
  Alert,
  AlertIcon,
  Tag,
  VStack,
  HStack,
  Divider,
  Progress,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export interface PostInterface {
  title: string;
  author: string;
  publishedAt: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  body: any;
  tags: string[];
  category?: string;
  excerpt?: string;
}

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <Progress
      value={progress}
      size="xs"
      colorScheme="red"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      borderRadius={0}
      background="transparent"
    />
  );
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No slug provided.");
      setLoading(false);
      return;
    }

    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      author,
      publishedAt,
      image,
      body,
      category,
      tags,
      excerpt
    }`;

    client
      // @ts-ignore
      .fetch(query, { slug })
      .then((data: PostInterface) => {
        if (!data) {
          setError("Post not found.");
        } else {
          setPost(data);
          console.log(data);
        }
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Error fetching post:", err);
        setError("Failed to load post.");
        setLoading(false);
      });
  }, [slug]);

  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    const url = window.location.href;
    const title = post?.title || "";

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    };

    window.open(shareUrls[platform], "_blank");
  };

  if (loading) {
    return (
      <Flex direction="column" minH="100vh" bgColor="#F2F4F3">
        <Navbar />
        <Flex justify="center" align="center" direction="column" flex="1">
          <Spinner size="xl" color="gray.500" />
        </Flex>
        <Footer />
      </Flex>
    );
  }

  if (error) {
    return (
      <Container maxW="4xl" py={8}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxW="4xl" py={8}>
        <Alert status="info">
          <AlertIcon />
          Post not found.
        </Alert>
      </Container>
    );
  }

  return (
    <Flex bgColor="#F2F4F3" flexDir="column" minH="100vh">
      <Navbar />
      <ReadingProgress />
      <Container maxW="4xl" flex="1">
        {/* Navigation */}
        <Box pt={10} pb={5} borderBottomWidth={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize={["xs", "md"]} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize={["xs", "md"]} href="/blog">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Text fontSize={["xs", "md"]}>{post.title}</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Article */}
        <VStack as="article" spacing={8} py={8} align="stretch">
          {/* Category
          {post.category && (
            <Box textAlign="left">
              <Tag colorScheme="red" size="sm">
                {post.category.toUpperCase()}
              </Tag>
            </Box>
          )} */}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <HStack spacing={4} wrap="wrap" justify="left">
              {post.tags.map((tag, index) => (
                <Tag key={index} colorScheme="teal" size="sm">
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}

          {/* Title */}
          <Box textAlign="left">
            <Heading as="h1" size="2xl" mb={4}>
              {post.title}
            </Heading>

            <Text fontSize="sm" color="gray.600">
              by{" "}
              <Text as="span" fontWeight="medium">
                {post.author}
              </Text>{" "}
              | {new Date(post.publishedAt).toLocaleDateString()}
            </Text>
          </Box>

          {/* Featured Image */}
          {post.image && post.image.asset && (
            <Box>
              <Image
                src={urlFor(post.image.asset)}
                alt={post.title}
                borderRadius="lg"
                w="full"
              />
            </Box>
          )}

          {/* Social Share */}
          <HStack justify="left" spacing={4}>
            <IconButton
              aria-label="Share on Twitter"
              icon={<FaTwitter />}
              onClick={() => handleShare("twitter")}
              colorScheme="twitter"
              variant="ghost"
            />
            <IconButton
              aria-label="Share on Facebook"
              icon={<FaFacebook />}
              onClick={() => handleShare("facebook")}
              colorScheme="facebook"
              variant="ghost"
            />
            <IconButton
              aria-label="Share on LinkedIn"
              icon={<FaLinkedin />}
              onClick={() => handleShare("linkedin")}
              colorScheme="linkedin"
              variant="ghost"
            />
          </HStack>

          <Divider />

          {/* Content */}
          <Box>
            {post.excerpt && (
              <Text fontSize="xl" color="gray.700" mb={8} fontWeight="medium">
                {post.excerpt}
              </Text>
            )}
            <Box
              textAlign="left"
              sx={{
                p: {
                  mb: 4,
                  lineHeight: "tall",
                },
                h2: {
                  fontSize: "2xl",
                  fontWeight: "bold",
                  mt: 8,
                  mb: 4,
                },
                h3: {
                  fontSize: "xl",
                  fontWeight: "bold",
                  mt: 6,
                  mb: 3,
                },
                "ul, ol": {
                  pl: 6,
                  mb: 4,
                },
                li: {
                  mb: 2,
                },
                blockquote: {
                  borderLeftWidth: 4,
                  borderLeftColor: "gray.200",
                  pl: 4,
                  py: 2,
                  my: 4,
                  fontStyle: "italic",
                },
              }}
            >
              <PortableTextComponent value={post.body} />
            </Box>
          </Box>
        </VStack>
      </Container>

      {/* Footer will stay at the bottom */}
      <Footer />
    </Flex>
  );
}
