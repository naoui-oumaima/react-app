import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/home";
import Item from "./Pages/Item";
import CreateItem from "./Pages/create";
import Profile from "./Pages/profile";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const Routes = () => {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/"  component={Home} /> 
        <Route exact path="/item"  component={Item}/> 
        <Route exact path="/profile"  component={Profile}/>
        <Route exact path="/createitem"  component={CreateItem}/>  
      </Switch>
      <Footer/>

    </Router>
  );
};

export default Routes;