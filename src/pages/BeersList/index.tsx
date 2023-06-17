import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { mockdata } from "./mockdata";
import BeersTable from "../../components/BeersTable";

const BeersList = () => {
  const [beers] = React.useState(mockdata);

  return (
    <VStack spacing={8}>
      <Heading>Beers List</Heading>

      {beers.length ? (
        <>
          <Text>({beers.length} beers today)</Text>
          <BeersTable beers={beers} />
        </>
      ) : (
        <Text>(No beers today)</Text>
      )}
    </VStack>
  );
};

export default BeersList;
