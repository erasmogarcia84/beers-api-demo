import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

import BeersTable from "../../components/BeersTable";
import { getBeers } from "../../services/beers";
import { Beer } from "../../types/beer";

const BeersList = () => {
  const [beers, setBeers] = React.useState<Beer[]>([]);

  const getBeersFromAPI = async () => {
    const currentBeers = await getBeers();
    setBeers(currentBeers);
  };

  React.useEffect(() => {
    getBeersFromAPI();
  }, []);

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
