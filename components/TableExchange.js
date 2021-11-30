import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
} from "@chakra-ui/react";

export default function TableExchange() {
  return (
    <Flex>
      <Table bg="white" boxShadow="lg" variant="simple" m={2}>
        <Thead>
          <Tr>
            <Th color="grey">Date</Th>
            <Th color="grey">Exchange Rate</Th>
          </Tr>
        </Thead>
        <Tbody textStyle="body" color="default">
          <Tr>
            <Td>07/10/2018</Td>
            <Td>1.1523</Td>
          </Tr>
          <Tr>
            <Td>07/10/2019</Td>
            <Td>1.1231</Td>
          </Tr>
          <Tr>
            <Td>07/10/2020</Td>
            <Td>1.1923</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table bg="white" boxShadow="lg" variant="simple" m={2}>
        <Thead>
          <Tr>
            <Th color="grey">Statistics</Th>
          </Tr>
        </Thead>
        <Tbody textStyle="body" color="default">
          <Tr>
            <Td>Lowest</Td>
            <Td>1.1523</Td>
          </Tr>
          <Tr>
            <Td>Highest</Td>
            <Td>1.1231</Td>
          </Tr>
          <Tr>
            <Td>Average</Td>
            <Td>1.1923</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
