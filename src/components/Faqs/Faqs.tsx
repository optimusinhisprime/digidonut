import { Flex, Heading } from "@chakra-ui/react";
import FAQSection from "./FAQSection";

interface FrequentlyAskedQuestionsProps {
  id: string;
}
export default function FrequentlyAskedQuestions({
  id,
}: FrequentlyAskedQuestionsProps) {
  return (
    <Flex
      id={id}
      bgColor="#F2F4F3"
      flexDir="column"
      textAlign="center"
      color="#262626"
      width="100%"
    >
      <Heading size="2xl" mt="10">
        Frequently Asked Questions
      </Heading>
      <FAQSection />
    </Flex>
  );
}
