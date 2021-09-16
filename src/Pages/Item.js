import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Modall from "../components/Modal";
import {FaInstagram, FaTelegramPlane, FaTwitter} from 'react-icons/fa';
import { useSelector } from "react-redux";



const Item = () => {

  const state = useSelector ((state)=>state.item);
  
  // console.log("item",state.value)
  const [show, setShow] = useState(false);
  const [CheckoutShow, setCheckoutShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChekout = () => setCheckoutShow(!CheckoutShow);

  const Checkout = () => {
    handleClose();
    handleChekout();
  };

  const affdetails = () => {
    const btn = document.querySelector("#offers");
    btn.style.display = "none";
    const btn1 = document.querySelector("#history");
    btn1.style.display = "none";
    const btn2 = document.querySelector("#details");
    btn2.style.display = "";
  };

  const affoffers = () => {
    const btn = document.querySelector("#offers");
    btn.style.display = "block";
    const btn1 = document.querySelector("#history");
    btn1.style.display = "none";
    const btn2 = document.querySelector("#details");
    btn2.style.display = "none";
  };

  const affhistory = () => {
    const btn = document.querySelector("#offers");
    btn.style.display = "none";
    const btn1 = document.querySelector("#history");
    btn1.style.display = "block";
    const btn2 = document.querySelector("#details");
    btn2.style.display = "none";
  };

  return (
    <>
      <Modall show={show} cancel={handleClose}>
        <div className="customModalHeader">
          <h2>Check Out</h2>
        </div>
        <div className="customModalBody">
          <div>
            <div className="customModalBodyHead">
              <p>item</p>
              <p>Subtotal</p>
            </div>
            <div className="customModalBodyBody">
              <div>
                <img src={state.item.src} alt="" />
                <div>
                  <p className="p1">{state.item.creator}</p>
                  <p className="p2">{state.item.info1}</p>
                </div>
              </div>
              <div className="price">4.5 ETH</div>
            </div>
            <div className="customModalBodyHead">
              <p>total</p>
              <p>4.5 ETH</p>
            </div>
          </div>
        </div>
        <div className="customModalFooter">
          <button className="closeBtnModal" onClick={handleClose}>
            Close
          </button>
          <button className="CheckoutBtnModal" onClick={Checkout}>
            Checkout
          </button>
        </div>
      </Modall>
      <Modall show={CheckoutShow} cancel={handleChekout}>
        <div className="payementModalHeader">
          <h2>Payment Successful</h2>
        </div>
        <div className="payementModalBody">
          <img src={state.item.src} alt="" />
          <div>
            You successfully purchased <b>{state.item.info1} </b>from <b> {state.item.creator}</b>
          </div>
        </div>
        <div className="payementModalFooter">
          <h3>Share</h3>
          <div>
            <FaInstagram/>
            <FaTwitter/>
            <FaTelegramPlane/>
          </div>
        </div>
      </Modall>
      <div className="body">
        <div className="row">
          <div className="col colsep">
            <img src={state.item.src} alt="" className="itemimg"></img>
          </div>
          <div className="col itemcol2">
            <div className="description">
              <div className="iteminfo1 ">
                <div>
                  <h1>{state.item.info1}</h1>
                  <p>
                    From <b>4.5 ETH</b> . 20 of 25 available
                  </p>
                </div>
                <div className="likecontain">
                  <p> {state.item.nblikes}</p>
                </div>
              </div>
              <p className="creator">Creator</p>
              <p className="creatorinfo">
                <img src={state.item.creatorimg} alt=""/> <b> {state.item.creator}</b>
              </p>
              <div>
                <Nav className="inav" defaultActiveKey="#details">
                  <Nav.Item onClick={affdetails}>
                    <Nav.Link className="inavitem" href="#details">
                      Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={affoffers}>
                    <Nav.Link className="inavitem" href="#offers">
                      Offers
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={affhistory}>
                    <Nav.Link className="inavitem" href="#history">
                      History
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="details" id="details">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="offers" id="offers">
                  <p>offers</p>
                </div>
                <div className="history" id="history">
                  <p>history</p>
                </div>
              </div>
              <div className="itembtn">
                <button className="buybtn" onClick={handleShow}>
                  Buy for 4.5 ETH
                </button>
                <button className="makeofferbtn">Make Offer</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal show={show} onHide={handleClose} className="checkout">
          <div closeButton className="checkoutheader">
            <h2>Check Out</h2>
          </div>
          <div className="checkoutbody">
            Woohoo, you're reading this text in a modal!
          </div>
          <div className="checkoutfooter">
            <button className="" onClick={handleClose}>
              Close
            </button>
            <button className="" onClick={handleClose}>
              Save Changes
            </button>
          </div>
        </Modal> */}
      </div>
    </>
  );
};
export default Item;
