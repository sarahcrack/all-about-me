import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

const WeeklySummaryTable = () => {
  return (
    <div className="weekly-summary">
      <h1 className="headings">WEEKLY SUMMARY</h1>
      <Table variant="striped" colorScheme="gray" mt={5}>
        <Tbody>
          <Tr>
            <Td textAlign="right">
              <h1 className="headings">Week 1: </h1>
            </Td>
            <Td textAlign="left">
              <p className="week-description">
                Welcome! Let’s get down to JavaScript basics and not go LOOPy
                WHILE we learn. IF you get stuck, ask for help, ELSE take a
                break and come back to it later 😊 LET confidenceThisWeek =
                VARIABLE.
              </p>
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="right">
              <h1 className="headings">Week 2: </h1>
            </Td>
            <Td textAlign="left">
              <p className="week-description">
                Codewars katas, JavaScript methods, Asynchronous JavaScript, JS
                methods, Pokemon and new Crocs!
              </p>
            </Td>
          </Tr>
          {/* Add the remaining weeks here */}
        </Tbody>
      </Table>
    </div>
  );
};

export default WeeklySummaryTable;
