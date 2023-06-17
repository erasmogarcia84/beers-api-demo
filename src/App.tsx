import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Route, Routes } from "react-router";

import BeersList from "./pages/BeersList";
import BeerDetails from "./components/BeerDetails";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher justifySelf="flex-end" alignItems={"flex-end"} />
      <Grid
        minH="100vh"
        p={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems="flex-start"
      >
        <Routes>
          <Route path="/" element={<BeersList />} />
          <Route path="/:beerId" element={<BeerDetails />} />
        </Routes>
      </Grid>
    </Box>
  </ChakraProvider>
);
