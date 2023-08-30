import { Flex } from "@chakra-ui/layout";
import { Text, useRadioGroup } from "@chakra-ui/react";
import FormItem from "./FormItem";

export default function CustomerBudget() {
  const budgetRanges = [
    "Less than P1K",
    "P1K - P3K",
    "P3K - P7K",
    "P7K - P10K",
    "More than P10K",
  ];
  return (
    <Flex
      p="5"
      direction="column"
      justifyItems="center"
      bgColor="#f9f9f9"
      borderRadius="3xl"
    >
      <Text fontWeight="semibold" fontSize={["md", "lg", "2xl", "3xl"]}>
        Estimate your budget
      </Text>
      <Flex mt="5" flexWrap={["wrap"]}>
        {budgetRanges.map((budgetRange) => {
          return <FormItem key={budgetRange} title={budgetRange} />;
        })}
      </Flex>
    </Flex>
  );
}
