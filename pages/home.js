import { useState, useEffect } from "react";

import { Button, Flex, Container, Box, Text } from "@chakra-ui/react";

import ConversionHistory from "../components/ConversionHistory";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home({ N_KEY }) {
  const [historyTab, setHistoryTab] = useState(false);

  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("BTC");
  const [to, setTo] = useState("USD");
  const [duration, setDuration] = useState(7);
  const [visibleChart, setVisibleChart] = useState(false);
  const [ratio, setRatio] = useState(null);

  const fromPar = "BTC";
  const toPar = "USD";

  const convert = () => {
    fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${N_KEY}&ids=${fromPar}&interval=1d,7d,30d&convert=${toPar}&per-page=100&page=1`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("res ->", result[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
          console.log("error ->", error);
        }
      );
    //ratio todo
    setRatio(50296);
  };

  return (
    <>
      <Flex fontWeight="semibold">
        <Box m={2}>💱Currency Exchange</Box>
        <Box
          borderBottom={!historyTab ? "2px" : "0px"}
          borderColor="primary"
          color={!historyTab ? "" : "grey"}
          m={2}
          cursor="pointer"
          onClick={() => setHistoryTab(false)}
        >
          CURRENCY CONVENTER
        </Box>
        <Box
          borderBottom={historyTab ? "2px" : "0px"}
          borderColor="primary"
          color={historyTab ? "" : "grey"}
          m={2}
          cursor="pointer"
          onClick={() => setHistoryTab(true)}
        >
          VIEW CONVERSION HISTORY
        </Box>
        <Box
          m={2}
          color="primary"
          textStyle="body"
          cursor="pointer"
          fontWeight="bold"
        >
          LOGOUT
        </Box>
      </Flex>
      <div>
        <br />
        <br />
        {amount} {from} {to}
      </div>
      {!historyTab ? (
        <CurrencyConverter
          amount={amount}
          setAmount={setAmount}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          duration={duration}
          setDuration={setDuration}
          visibleChart={visibleChart}
          setVisibleChart={setVisibleChart}
          convert={convert}
          ratio={ratio}
        />
      ) : (
        <ConversionHistory />
      )}
      <br />
      <br />
      <br />
    </>
  );
}

export async function getStaticProps() {
  const N_KEY = process.env.NOMICS_KEY;

  return {
    props: { N_KEY },
  };
}
