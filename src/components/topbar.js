import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, FormControl} from 'react-bootstrap';
import { FaSistrix } from 'react-icons/fa';

const Topbar = () =>{

    return (
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" className="navbar">
            <Link to='/' className='logo'>
                <img src="img/logo.png" alt=""></img>
            </Link>
            <div className="d-flex">
            <FaSistrix/>
                <FormControl
                    type="search"
                    placeholder="Search Item Here"
                    className="search"
                    aria-label="Search">
                </FormControl>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" className='menu'>Explore</Nav.Link>
                    <Nav.Link href="#items" className='menu'>My Items</Nav.Link>
                    <Nav.Link href="#Following" className='menu'>Following</Nav.Link>
                    <Link  to="/createitem" className="link"><button className="btncreate">Create</button> </Link>
                    <button className="btnconnect">connect</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Topbar;