import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import { Navbar } from "components/layout/Navbar";

interface LayoutMainProps {
  children: React.ReactNode;
}

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
