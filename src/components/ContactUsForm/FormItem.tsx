import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FormItemProps {
  title: string;
}

export default function FormItem({ title }: FormItemProps) {
  return (
    <Flex cursor="pointer" p="3" m="5" border="1px solid" borderRadius="full">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {title}
      </motion.button>
    </Flex>
  );
}
