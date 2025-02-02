import { Flex, Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FeaturedPost } from "./FeaturedPost";
import Navbar from "../Navbar/Navbar";
import client from "../../sanity/client";
import { Post } from "../../types";
import HeroLoader from "./HeroLoader";
import { motion } from "framer-motion";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✅ Ensure canvas exists

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ Ensure context is available

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      if (!ctx || !canvas) return; // ✅ Check inside animation loop

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  useEffect(() => {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      author,
      publishedAt,
      image,
      excerpt,
      isFeatured,
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
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err: unknown) => {
        console.error("Error fetching posts:", err);
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  const featuredPosts = posts.filter((post) => post.isFeatured).slice(0, 3); // Limit to 3 featured posts

  return (
    <Flex
      px={{ "2xl": "40" }}
      id={id}
      bgColor="#000807"
      color="#F2F4F3"
      flexDir={"column"}
      position="relative"
      overflow="hidden"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Navbar />
      <Flex mt="5" flexDir={"column"} position="relative" zIndex={0}>
        <Flex
          mx={["10", "10"]}
          my={2}
          textAlign={"start"}
          flexDir="column"
          w={{
            base: "80%",
            sm: "80%",
            md: "58%",
            lg: "65%",
            xl: "80%",
            "2xl": "70%",
          }}
        >
          <Heading
            letterSpacing={3}
            fontFamily="Lure"
            my="3"
            textAlign={{ base: "start", xl: "start", "2xl": "start" }}
            size={{ base: "sm", sm: "lg", xl: "4xl", "2xl": "4xl", lg: "xl" }}
          >
            A Design and Development Studio for Your Startup’s Success.
          </Heading>
          <Text fontSize={{ base: "sm", xl: "lg", "2xl": "large" }} mt="5">
            Secure Your Place, Design Your Tomorrow With Us —
          </Text>
          <Text mb="5" fontSize={{ base: "sm", xl: "lg", "2xl": "large" }}>
            Let Your Ideas Find A Home and Take Shape.
          </Text>
        </Flex>
        {/* Latest Insights Section */}
        <Box mx="10" textAlign="start" mt={6}>
          <Heading textDecoration="underline" size={["sm", "md"]}>
            Latest Insights:
          </Heading>
        </Box>

        {loading ? (
          <HeroLoader /> // Display loader while fetching posts
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Transition the posts in
          >
            {/* Grid for Featured Posts */}
            {featuredPosts.length > 0 ? (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={6}
                mx="10"
                my={10}
              >
                {featuredPosts.map((post, index) => (
                  <FeaturedPost
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug.current}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Box mx="10" textAlign="center" mt={6}>
                <Text fontSize="lg" color="gray.400">
                  No featured posts available at the moment.
                </Text>
              </Box>
            )}
          </motion.div>
        )}
      </Flex>
    </Flex>
  );
}
