import { Box, Divider, Flex, IconButton, Show, Text } from "@chakra-ui/react";
import React from "react";
import BrandValues from "./BrandValues";
import { ImArrowDownRight2 } from "react-icons/im";

export default function Values() {
  const brandValues = [
    {
      title: "Wholesome Delivery",
      description:
        "We excel in service because our team is our top priority. We prioritize their physical, mental, and emotional well-being, ensuring they're at their best. This dedication extends to our clients, who experience the same level of care and attention.",
    },
    {
      title: "Client Centric",
      description:
        "We place a high value on understanding and meeting the needs of our clients, to foster trust and satisfaction, and aim for long-term relationships rather than short-term gains.",
    },
    {
      title: "Impact Driven",
      description:
        "We actively seek out opportunities to collaborate with like-minded partners and organizations to amplify our collective impact and drive positive change on a larger scale.",
    },
  ];
  return (
    <Flex flexDir="column" px="10">
      <Box justifyContent="center" mt="2">
        <Divider h="0.5" bgColor="#000807" />
      </Box>
      <Flex my="10" px={["2", "10"]} flexDir={["column", "row"]}>
        <Flex textAlign="start" w={["100%", "49%"]} flexDir="column">
          <Flex
            justifyContent={["space-around", "space-around", "space-between"]}
          >
            <Show above="md">
              <Text fontWeight="semibold" fontSize={20}>
                (Our Values)
              </Text>
              <IconButton
                variant="ghost"
                mr={10}
                borderRadius="100%"
                aria-label="Arrow Pointing to Services"
                icon={<ImArrowDownRight2 size={20} />}
              />
            </Show>
            <Show below="md">
              <Text my="3" fontWeight="bold" fontSize={{ base: 18, sm: 25 }}>
                (Studio Values)
              </Text>
            </Show>
          </Flex>

          <Text mb="5" fontSize={["25", "35"]}>
            "Our vision is to craft a future where care meets impact, one client
            at a time."
          </Text>
        </Flex>

        <Box>
          <Divider bgColor="#000807" mx="5" orientation="vertical" w="0.5" />
        </Box>

        <Flex w={["100%", "50%"]} flexDir="column">
          {brandValues.map((value) => (
            <BrandValues title={value.title} description={value.description} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
