import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faqs } from "../../constants";

const FAQSection = () => {
  return (
    <VStack padding={20} spacing={8} align="start" width="100%" mx="auto">
      <Accordion width="100%" allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel textAlign={"left"} pb={4}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default FAQSection;
