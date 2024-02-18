import { Stack, HStack, Box, Flex } from "@chakra-ui/react";
import { useRadio, useRadioGroup } from "@chakra-ui/radio";
import { chakra } from "@chakra-ui/system";
import { UseFormRegister, FieldValues } from "react-hook-form";

function CustomRadio(props: any) {
  const { register, budgetAmount, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Flex
        borderWidth={1}
        borderColor="grey"
        {...getRadioProps()}
        bg={state.isChecked ? "teal.400" : "transparent"}
        p={2}
        mx="2"
        rounded="full"
      >
        <Box {...getLabelProps()}>{budgetAmount}</Box>
      </Flex>
    </chakra.label>
  );
}

interface BudgetCardRadioGroupProps {
  register: UseFormRegister<FieldValues>;
  setCustomerBudget: any;
}

export default function BudgetCardRadioGroup({
  register,
  setCustomerBudget,
}: BudgetCardRadioGroupProps) {
  const budgetRanges = [
    "Less than P5K",
    "P5K - P15K",
    "P15K - P25K",
    "P25K - P40K",
    "More than P40K",
  ];

  const handleChange = (value: any) => {
    setCustomerBudget(value);
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    onChange: handleChange,
  });

  return (
    <Stack {...getRootProps()}>
      <Flex flexDir={["column", "row"]}>
        {budgetRanges.map((budgetRange) => {
          return (
            <CustomRadio
              key={budgetRange}
              budgetAmount={budgetRange}
              register={register}
              {...getRadioProps({ value: budgetRange })}
            />
          );
        })}
      </Flex>
    </Stack>
  );
}
