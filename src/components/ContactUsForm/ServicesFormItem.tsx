import { Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ServicesFormItemProps {
  title: string;
  setServicesWanted: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ServicesFormItem({
  title,
  setServicesWanted,
}: ServicesFormItemProps) {
  return (
    <Flex justifyContent="center" color={"black"} onClick={() => {}}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          color="black"
          // colorScheme="teal"
          borderRadius="3xl"
          fontSize={["xs", "sm"]}
        >
          {title}
        </Button>
      </motion.div>
    </Flex>
  );
}
