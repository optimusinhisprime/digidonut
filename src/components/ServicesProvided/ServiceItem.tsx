import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  serviceNum: number;
  serviceName: string;
}
export default function ServiceItem({
  serviceName,
  serviceNum,
}: ServiceItemProps) {
  const zoomVariants = {
    hover: {
      scale: 1.1, // Increase the size on hover
    },
    initial: {
      scale: 1, // Default size
    },
  };
  return (
    <motion.div
      whileHover="hover" // Apply the zoom effect on hover
      initial="initial"
      variants={zoomVariants}
      style={{ width: "100%" }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        color="#F2F4F3"
        borderRadius="2xl"
      >
        <Box
          width={100}
          height={100}
          bgColor="#393D3F"
          borderRadius="2xl"
          justifyContent="center"
          alignItems="center"
          p="7"
        >
          <Text textAlign="center" fontSize="4xl" fontWeight="bold">
            {serviceNum}
          </Text>
        </Box>
        <Box color="#262626" w="100%">
          <Text fontSize="2xl" fontWeight="semibold">
            {serviceName}
          </Text>
        </Box>
      </Flex>
    </motion.div>
  );
}
