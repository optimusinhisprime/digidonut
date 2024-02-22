import { Flex, Text, Link, Stack, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex
      bgColor="#262626"
      color="#F2F4F3"
      h="10%"
      flexDir="column"
      justifyContent="center"
      textAlign="center"
      paddingY={2}
    >
      <Text fontSize="sm">
        &copy; {currentDate.getFullYear()} DigiDonut Tech Studio. All rights
        reserved.
      </Text>
      <Spacer />
      <Stack direction="row" spacing={4} justify="center">
        <Link
          _hover={{ textDecoration: "none" }}
          href="/about-us"
          fontSize="sm"
        >
          About Us
        </Link>
        <HashLink to="/#our-services" smooth>
          <Text fontSize="sm" cursor="pointer">
            Services
          </Text>
        </HashLink>
        <Link
          _hover={{ textDecoration: "none" }}
          href="/contact-us"
          fontSize="sm"
        >
          Contact Us
        </Link>
      </Stack>
    </Flex>
  );
}
