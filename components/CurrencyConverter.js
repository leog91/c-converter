import React from "react";
import styles from "../styles/CurrencyConverter.module.css";
import {
  Text,
  Input,
  Flex,
  Button,
  Box,
  Container,
  Center,
  Divider,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";

import MyChart from "./MyChart";

import TableExchange from "./TableExchange";

export default function CurrencyConverter({
  amount,
  from,
  to,
  duration,
  visibleChart,
  setAmount,
  setFrom,
  setTo,
  setDuration,
  setVisibleChart,
  convert,
  ratio,
}) {
  return (
    <Box bg="background">
      <Container maxW="container.lg">
        <Text textStyle="pageTitle" color="default">
          I want to convert
        </Text>
        <Flex>
          <Box>
            <Text textStyle="input" color="grey">
              Amount
            </Text>
            <Input
              placeholder="Amount"
              variant="flushed"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </Box>
          <Box>
            <Text textStyle="input" color="grey">
              From
            </Text>
            <Input
              placeholder="From"
              variant="flushed"
              type="text"
              onChange={(e) => setFrom(e.target.value)}
            />
          </Box>
          <Button boxShadow="lg" m={2} bg="white" variant="ghost">
            X
          </Button>
          <Box>
            <Text textStyle="input" color="grey">
              To
            </Text>
            <Input
              placeholder="To"
              variant="flushed"
              type="text"
              onChange={(e) => setTo(e.target.value)}
            />
          </Box>

          <Button
            mt={2}
            bg="primary"
            color="white"
            colorScheme="teal"
            onClick={() => convert()}
          >
            Convert
          </Button>
        </Flex>

        {ratio && (
          <Box>
            <Center>
              <Flex textStyle="pageTitle" color="default">
                <Box>
                  {amount} {from}
                </Box>{" "}
                <Box> = </Box>{" "}
                <Box color="accent">
                  {" "}
                  {amount * ratio} {to}
                </Box>
              </Flex>
            </Center>
            <Center textStyle="body" color="default">
              <Box>
                1 {from} = 1.142 {to}
              </Box>
              <Box>
                1 {to} = 0.842 {from}
              </Box>
            </Center>
          </Box>
        )}

        <Box bg="gray.300">
          <Divider m={5} color="default" />
        </Box>

        <Box>
          <Text textStyle="sectionTitle" color="default">
            Exchange History
          </Text>

          <Box>
            <Text textStyle="input" color="grey">
              Duration
            </Text>
            {duration}
            {duration}7 14 30
            <Select
              // placeholder="Select option"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value={7}>7 Days</option>
              <option value={14}>14 Days</option>
              <option value={30}>30 Days</option>
            </Select>
            <input
              type="radio"
              checked={!visibleChart}
              onChange={() => setVisibleChart(false)}
            />
            <input
              type="radio"
              checked={visibleChart}
              onChange={() => setVisibleChart(true)}
            />
          </Box>

          {visibleChart ? <MyChart /> : <TableExchange />}
        </Box>
      </Container>
    </Box>
  );
}
