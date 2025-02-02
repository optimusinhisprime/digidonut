import React from "react";
import {
  Box,
  Grid,
  Skeleton,
  SkeletonText,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const PostLoader = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const shimmerColor = useColorModeValue(
    "linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",
    "linear-gradient(90deg, #2d3748 0%, #4a5568 50%, #2d3748 100%)"
  );

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      boxShadow="lg"
      p={4}
    >
      <Skeleton
        height="200px"
        borderRadius="md"
        mb={4}
        animation={`${shimmer} 2s infinite linear`}
        bgGradient={shimmerColor}
      />
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        skeletonHeight="6"
        width="60%"
      />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="3" />
      <Box mt={4} display="flex" justifyContent="space-between">
        <Skeleton height="20px" width="30%" />
        <Skeleton height="20px" width="20%" />
      </Box>
    </Box>
  );
};

const BlogLoader = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={8}
      width="100%"
    >
      {[...Array(6)].map((_, index) => (
        <PostLoader key={index} />
      ))}
    </Grid>
  );
};

export default BlogLoader;
