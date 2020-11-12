import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routesProtected from 'src/routeProjected';
import routes from 'src/routes'

const App = () => {
  const routesProtect = useRoutes(routesProtected);
  const route = useRoutes(routes)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {route}
      {routesProtect}
    </ThemeProvider>
  );
};

export default App;
