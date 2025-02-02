import { Flex, Heading, Text, Box, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FeaturedPost } from "./FeaturedPost";
import Navbar from "../Navbar/Navbar";

interface HeroProps {
  id: string;
}

const blogPosts = [
  {
    title: "Why Every Startup Needs a Strong Brand Identity",
    excerpt:
      "A deep dive into how branding impacts startup success and tips to build a solid identity.",
    slug: "why-every-startup-needs-brand-identity",
  },
  {
    title: "Building Scalable Apps with React Native",
    excerpt:
      "Exploring how React Native and Expo can help you create high-performance, cross-platform apps.",
    slug: "building-scalable-apps-react-native",
  },
  {
    title: "Essential Web Design Principles for Business Growth",
    excerpt:
      "Key design principles that can improve user experience and conversion rates on your website.",
    slug: "essential-web-design-principles-business-growth",
  },
];

export default function Hero({ id }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        <Stack direction={["column", "row"]} mx="10" my={10} spacing={2}>
          {blogPosts.map((post, index) => (
            <FeaturedPost key={index} post={post} />
          ))}
        </Stack>
        ;
      </Flex>
    </Flex>
  );
}
