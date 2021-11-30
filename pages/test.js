import React from "react";
import { Button, Flex, Container, Box, Text } from "@chakra-ui/react";

export default function Test() {
  return (
    <div>
      qweqweqe
      <Box bg="default">Default</Box>
      <Box bg="primary">Primary</Box>
      <Box bg="warn">Warn</Box>
      <Box bg="grey">Grey</Box>
      <Box bg="accent">Accent</Box>
      <Box textStyle="pageTitle">This is a box</Box>
      <Box textStyle="sectionTitle">This is a box</Box>
      <Box textStyle="body">This is a box</Box>
      <Text textStyle="pageTitle">This is a box</Text>
      <br />
      <br />
      <Text fontSize="48px" color="tomato">
        I'm using a custom font-size value for this text
      </Text>
      <br />
      <Button>asd</Button>
      <Button colorScheme="blue">Button</Button>
      sarasa
    </div>
  );
}
