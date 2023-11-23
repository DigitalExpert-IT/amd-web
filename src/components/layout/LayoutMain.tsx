import React from 'react'
import { Box } from "@chakra-ui/react"
import Footer from './Footer';

interface LayoutMainProps {
  children: React.ReactNode;
}

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <Box>
      {children}
      < Footer />
    </Box>
  )
}
