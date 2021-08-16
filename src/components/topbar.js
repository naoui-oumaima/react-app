import React, {useContext } from 'react';
import { Link} from 'react-router-dom'
import { Dropdown, Navbar, Nav, Container } from 'react-bootstrap';
import {ThemeContext} from '../context/themeContext'

const Topbar = () =>{

    const {toggleTheme} = useContext(ThemeContext);

    return (
        <Navbar expand="xxl" className="py-0">
            <div class="container-fluid">
                    <div className="logo">
                        <Navbar.Brand to='/'>
                            <img src="img/logo.png" class="dark"alt='logo'/>
                            <img src="img/tlogo.png" class="light" alt='logo'/>
                        </Navbar.Brand>
                    </div>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
                            {/* <span className="navbar-toggler-icon"></span> */}
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <Navbar.Collapse id="basic-navbar-nav nav ">
                        <ul className="navbar-nav me-auto mb-lg-0 ul1">
                            <Nav.Item className="nav-item me-3">
                                <Nav.Link to="/MyAssets" className="nav-link" aria-current="page" >
                                    <img src="img/asset.png" className="dark pe-1" alt=''/>
                                    <img src="img/lasset.png" className="light pe-1" alt=''/>
                                    MyAssets
                                </Nav.Link>
                            </Nav.Item >
                            <Nav.Item  className="nav-item me-3">
                                <Nav.Link to="/Deposit" className="nav-link ">
                                    <img src="img/dollar.png" className="dark pe-1"alt=''/>
                                    <img src="img/ldollar.png" className="light pe-1" alt=''/>
                                    Deposit/Withdraw
                                </Nav.Link>
                            </Nav.Item >
                            <li className="nav-item me-3">
                                <Nav.Link to="/Support" className="nav-link">
                                    <img src="img/support.png" className="dark pe-1" alt=''/>
                                    <img src="img/lsupport.png" className="light pe-1" alt=''/>
                                    Support 
                                </Nav.Link>
                            </li>
                            <li class="nav-item me-3">
                                <Nav.Link to="/profil" className="nav-link"> 
                                    <img src="img/setting.png" class="dark pe-1" alt=''/>
                                    <img src="img/lsetting.png" class="light pe-1"alt=''/>
                                    AdminPage
                                </Nav.Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav pt-2 mb-lg-0 d-flex ul2">
                            <li className="nav-item me-3 mt-2" onClick={toggleTheme}>
                                    <img src="img/sun.png" className="navimg dark" alt='' />
                                    <img src="img/moon.png" className="navimg light" alt=''/>
                            </li>
                            <li className="nav-item me-3 mt-2">
                                    <img src="img/language.png" className="navimg dark"alt=''/>
                                    <img src="img/llanguage.png" className="navimg light"alt=''/>

                            </li>
                            <li className="nav-item me-3 mt-2">
                                    <img src="img/notif.png" className="navimg dark"alt=''/>
                                    <img src="img/lnotif.png" className="navimg light" alt=''/>

                            </li>
                            <li class="nav-item liuser">
                            <Dropdown >
                            <div className="row">
                                <div className="col px-0 ms-3 nav-link">
                                    <img src="img/user1.png" className="rounded-circle z-depth-2 user-img" alt=''/>                  
                                </div>
                                <div className="col nav-link">
                                    John Doe 
                                    <p>Administrator</p>
                                </div>
                                    {/* <div className="col px-0 pt-2 dropdown-toggle"></div> */}
                                <Dropdown.Toggle variant="succecss" id="dropdown-basic" className="col-1 toggle">
                                </Dropdown.Toggle>
                            </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item><hr className="dropdown-divider"/></Dropdown.Item>
                                    <Dropdown.Item><Link to='/login'>LogOut</Link></Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>

                            </li>
                        </ul>
                    </Navbar.Collapse> 
                </div>            
            </Navbar>
            // <Home color={color}></Home>
    )
}

export default Topbar;