import {
  useCheckbox,
  chakra,
  Flex,
  useCheckboxGroup,
  Text,
  Box,
} from "@chakra-ui/react";

export default function ServicesOfferedCheckboxGroup({
  setServicesWanted,
}: any) {
  function CustomCheckbox(props: any) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="40"
        bg="green.50"
        border="1px solid"
        borderColor="green.500"
        rounded="lg"
        px={3}
        py={1}
        mx="2"
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="green.500"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} bg="green.500" />}
        </Flex>
        <Text color="gray.700" {...getLabelProps()}>
          {props.value}
        </Text>
      </chakra.label>
    );
  }

  const handleChange = (value: any) => {
    setServicesWanted(value);
  };

  const { getCheckboxProps } = useCheckboxGroup({
    onChange: handleChange,
  });

  const servicesOfferedList = [
    "Branding",
    "Website",
    "Web App",
    "Mobile App",
    "Consultancy",
  ];

  return (
    <Flex direction={["column", "column", "row"]}>
      {servicesOfferedList.map((service) => {
        return <CustomCheckbox {...getCheckboxProps({ value: service })} />;
      })}
    </Flex>
  );
}
