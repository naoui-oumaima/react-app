import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/home";
import Authentication from "./Pages/authentification";
import ThemeContextProvider from "./context/themeContext"


const Routes = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/> 
          <Route path="/login" component={Authentication}/>
          <Route path="/register" component={Authentication}/>
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
};

export default Routes;