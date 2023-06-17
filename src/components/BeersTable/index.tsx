import React, { FC } from "react";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  image_url: string;
}

const BeersTable: FC<{ beers: Beer[] }> = ({ beers }) => {
  const navigate = useNavigate();
  const bgRow = useColorModeValue("gray.100", "gray.700");

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          Data fetched from{" "}
          <a
            href="https://punkapi.com/documentation/v2"
            target="_blank"
            rel="noreferrer"
          >
            https://punkapi.com/documentation/v2
          </a>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name & Description</Th>
            <Th>Firts brewed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {beers.map((beer) => (
            <Tr
              key={beer.id}
              onClick={() => navigate(`/${beer.id}`)}
              style={{ cursor: "pointer" }}
              _hover={{ bg: bgRow }}
            >
              <Td>
                <Image
                  boxSize="100px"
                  objectFit="contain"
                  src={beer.image_url}
                  alt={beer.name}
                />
              </Td>
              <Td>
                <Text as="b" display={"block"} mb={2}>
                  {beer.name}
                </Text>
                <Text as="i" display={"block"} mb={2}>
                  {beer.tagline}
                </Text>
              </Td>
              <Td isNumeric>{beer.first_brewed}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Image</Th>
            <Th>Name & Description</Th>
            <Th>Firts brewed</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BeersTable;
