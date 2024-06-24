
// src/components/ThemeToggle.js
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';
import Switch from '@mui/material/Switch';

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch onChange={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;
