import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { colorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
