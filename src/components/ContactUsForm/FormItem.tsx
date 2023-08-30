import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FormItemProps {
  title: string;
}

export default function FormItem({ title }: FormItemProps) {
  return (
    <Flex
      justifyContent="center"
      cursor="pointer"
      p={["1", "3"]}
      m={["1", "5"]}
      border="1px solid"
      borderRadius="full"
      maxW={["40%"]}
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Text fontSize={["xs", "sm"]}> {title}</Text>
      </motion.button>
    </Flex>
  );
}
