import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

const Topbar = () => {
  const [Navstyle, setNavstyle] = useState("closetoggle");
  const [showToggle, setshowToggle] = useState(true);
  const [showsearch, setShowsearch] = useState(true);

  return (
    <navbar className="navbar">
      <Link
        to="/"
        onClick={() => {
          setNavstyle("closetoggle");
          setshowToggle(true);
          setShowsearch(true);
        }}
        className="link logolink"
      >
        {/* <p> */}
        <img src="img/logomobile.png" alt="" className="logo"></img>
        <img src="img/lightlogomobile.png" alt="" className="lightlogo"></img>
        <div className="logoname">CryptoKet</div>
        {/* </p> */}
        {/* <img src="img/lightlogomobile.png" alt="" className="lightlogomobile"></img> */}
      </Link>
      {showsearch ? (
        <div className="navbarsearch">
          <FaSistrix />
          <FormControl
            type="search"
            placeholder="Search Item Here"
            className="search"
            aria-label="Search"
          ></FormControl>
        </div>
      ) : (
        <div style={{ width: "80%" }}></div>
      )}
      <div className="navbartoggle">
        {showToggle ? (
          <FcMenu
            className="FcMenu"
            onClick={() => {
              setNavstyle("opentoggle");
              setshowToggle(false);
              setShowsearch(false);
            }}
          />
        ) : (
          <AiOutlineClose
            className="AiOutlineClose"
            onClick={() => {
              setNavstyle("closetoggle");
              setshowToggle(true);
              setShowsearch(true);
            }}
          />
        )}
      </div>
      <nav className={Navstyle}>
        <div className="navigationItems">
          <div className="navText">
            <div
              className="menu"
              onClick={() => {
                setNavstyle("closetoggle");
                setshowToggle(true);
                setShowsearch(true); //
              }}
            >
              <a href="/">Explore </a>
            </div>

            <div
              className="menu"
              onClick={() => {
                setNavstyle("closetoggle");
                setshowToggle(true);
                setShowsearch(true);
              }}
            >
              <a href="#items">My Items</a>
            </div>
            <div
              className="menu"
              onClick={() => {
                setNavstyle("closetoggle");
                setshowToggle(true);
                setShowsearch(true);
              }}
            >
              <a href="#Following">Following </a>
            </div>
          </div>
          <div className="btnnavbar">
            <Link to="/createitem" className="link">
              <button
                className="btncreate"
                onClick={() => {
                  setNavstyle("closetoggle");
                  setshowToggle(true);
                  setShowsearch(true);
                }}
              >
                Create
              </button>
            </Link>
            <button
              className="btnconnect"
              onClick={() => {
                setNavstyle("closetoggle");
                setshowToggle(true);
                setShowsearch(true);
              }}
            >
              connect
            </button>
          </div>
        </div>
      </nav>
    </navbar>
    /* <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Link to="/">
        <img src="img/logo.png" alt="" className="logo"></img>
        <img src="img/lightlogo.png" alt="" className="lightlogo"></img>
        <img src="img/logomobile.png" alt="" className="logomobile"></img>
        <img src="img/lightlogomobile.png" alt="" className="lightlogomobile"></img>
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
    </Navbar> */
  );
};

export default Topbar;
