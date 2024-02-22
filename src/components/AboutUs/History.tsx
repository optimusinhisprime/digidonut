import { Flex, Heading, Link, Show, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function History() {
  const [fullTextVisible, setFullTextVisible] = useState(false);
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Heading my={["2", "5"]} size={["xl", "2xl", "2xl"]}>
        Our Story
      </Heading>
      <Show above="md">
        <Text my={["2", "5", "5"]} w={["90%", "80%", "50%"]}>
          Born from a passion for tech that's both beautiful and functional,
          Digidonut sprinkles creativity onto websites, apps, and brands. We're
          not your average studio. Imagine bold designs dancing with flawless
          code, served with a side of fun. Ditch the dry tech talk, join us for
          a delightful experience that satisfies your eyes and your needs. We're
          the sugar rush your tech project craves! See how we transformed Salvus
          Capital's website at{" "}
          <Link
            isExternal
            href="https://salvuscapital.co.bw"
            textDecoration="underline"
            _hover={{ color: "#B80C09" }}
          >
            salvuscapital.co.bw
          </Link>{" "}
          or{" "}
          <Link
            href="/contact-us"
            textDecoration="underline"
            _hover={{ color: "#B80C09" }}
          >
            get a free quote today!
          </Link>
        </Text>
      </Show>
      <Show below="md">
        {fullTextVisible ? (
          <Text my={["2", "5", "5"]} w={["90%", "80%", "50%"]}>
            Born from a passion for tech that's both beautiful and functional,
            Digidonut sprinkles creativity onto websites, apps, and brands.
            We're not your average studio. Imagine bold designs dancing with
            flawless code, served with a side of fun. Ditch the dry tech talk,
            join us for a delightful experience that satisfies your eyes and
            your needs. We're the sugar rush your tech project craves! See how
            we transformed Salvus Capital's website at{" "}
            <Link
              isExternal
              href="https://salvuscapital.co.bw"
              textDecoration="underline"
              _hover={{ color: "#B80C09" }}
            >
              salvuscapital.co.bw
            </Link>{" "}
            or{" "}
            <Link
              href="/contact-us"
              textDecoration="underline"
              _hover={{ color: "#B80C09" }}
            >
              get a free quote today!
            </Link>
            <Text
              cursor="pointer"
              color="#B80C09"
              onClick={() => {
                setFullTextVisible(false);
              }}
            >
              show less
            </Text>
          </Text>
        ) : (
          <Text fontSize={18} my={["2", "5", "5"]} w={["90%", "80%", "50%"]}>
            Born from a passion for tech that's both beautiful and functional,
            Digidonut sprinkles creativity onto websites, apps, and brands.
            We're not your average studio. Imagine bold designs dancing with
            flawless code, served with a side of fun....
            <Text
              cursor="pointer"
              color="#B80C09"
              onClick={() => {
                setFullTextVisible(true);
              }}
            >
              show more
            </Text>
          </Text>
        )}
      </Show>
    </Flex>
  );
}
