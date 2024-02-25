import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack borderRadius="10px" align="start" bg="white">
      <Image borderRadius="10px" width="100%" src={imageSrc} alt="" />
      <VStack hight="auto" align="start" p="10px">
        <Heading as="h6" color="black">
          {title}
        </Heading>
        <Text ml="10px" color="#A0A9B8">
          {description}
        </Text>
        <HStack m='auto 0 auto 0' align='center'>
          <Text fontWeight="bold" color="black">
            See more
          </Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
