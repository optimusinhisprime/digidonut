import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import BudgetCardRadioGroup from "./BudgetCardRadioGroup";
import { SetStateAction } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface CustomerBudgetProps {
  setCustomerBudget: React.Dispatch<SetStateAction<string>>;
  register: UseFormRegister<FieldValues>;
}

export default function CustomerBudget({
  register,
  setCustomerBudget,
}: CustomerBudgetProps) {
  return (
    <Flex
      p="5"
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text
        textAlign="start"
        fontWeight="semibold"
        fontSize={{ base: "md", sm: "lg", xl: "2xl", "2xl": "3xl" }}
      >
        Estimate your budget:
      </Text>
      <Flex mt="5" flexWrap={["wrap"]}>
        <BudgetCardRadioGroup
          register={register}
          setCustomerBudget={setCustomerBudget}
        />
      </Flex>
    </Flex>
  );
}
