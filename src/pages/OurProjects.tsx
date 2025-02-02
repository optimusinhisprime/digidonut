import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";

interface Star {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
}

export default function OurProjects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * (canvas?.width || window.innerWidth),
      y: Math.random() * (canvas?.height || window.innerHeight),
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      if (!canvas || !ctx) return;
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

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <Flex
      px={{ "2xl": "40" }}
      bgColor="#000807"
      color="#F2F4F3"
      flexDir={"column"}
      position="relative"
      overflow="hidden"
      height="100vh"
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
      <Flex flexDir="column">
        <Navbar />
        <Flex
          h="100vh"
          alignItems="center"
          justifyContent="center"
          bgColor="#000807"
        >
          <Heading color="white" size="xl">
            Coming Soon...
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
