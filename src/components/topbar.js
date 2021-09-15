import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";

const Topbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Link to="/">
        <img src="img/logo.png" alt="" className="logo"></img>
        <img src="img/logomobile.png" alt="" className="logomobile"></img>
      </Link>
      <div className="navbarsearch">
        <FaSistrix />
        <FormControl
          type="search"
          placeholder="Search Item Here"
          className="search"
          aria-label="Search"
        ></FormControl>
      </div>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbartoggle"
      />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="menu">
            Explore
          </Nav.Link>
          <Nav.Link href="#items" className="menu">
            My Items
          </Nav.Link>
          <Nav.Link href="#Following" className="menu">
            Following
          </Nav.Link>
          <div className="btnnavbar">
            <Link to="/createitem" className="link">
              <button className="btncreate">Create</button>{" "}
            </Link>
            <button className="btnconnect">connect</button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
