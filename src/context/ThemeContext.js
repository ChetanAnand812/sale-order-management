import React, { createContext } from 'react';
import { ChakraProvider, extendTheme, useColorMode, Button } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const ThemeContext = createContext();

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'gray.800')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      {children}
    </ChakraProvider>
  );
};

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};
