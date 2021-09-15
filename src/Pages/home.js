import React, { useRef } from "react";
import { useHistory } from "react-router";
import Bids from "../components/bids";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const history = useHistory();
  const scrollRight = () => {
    ref.current.scrollLeft += 200;
  };
  const scrollleft = () => {
    ref.current.scrollLeft -= 200;
  };
  const sellers = [
    { num: 1, img: "img/mia.png", name: "Mia Ayana", info1: 5.25 },
    { num: 2, img: "img/rian.png", name: "Rian Leon", info1: 4.932 },
    { num: 3, img: "img/lady.png", name: "Lady Young", info1: 4.62 },
    { num: 4, img: "img/black.png", name: "Black Glass", info1: 4.125 },
    { num: 5, img: "img/budhiman.png", name: "Budhiman", info1: 3.921 },
    { num: 6, img: "img/mia.png", name: "Mia Ayana", info1: 5.25 },
    { num: 7, img: "img/rian.png", name: "Rian Leon", info1: 4.932 },
    { num: 8, img: "img/lady.png", name: "Lady Young", info1: 4.62 },
    { num: 9, img: "img/black.png", name: "Black Glass", info1: 4.125 },
    { num: 10, img: "img/budhiman.png", name: "Budhiman", info1: 3.921 },
  ];

  // const breakPoints = [
  //     {width:1440, itemToShow:5},
  //     {width:500, itemToShow:2},
  //     {width:800, itemToShow:3},
  // ];

  return (
    <div className="body">
      <div className="discover">
        <p> Discover, collect, and sell extraordinary NFTs</p>
      </div>
      <div id="Following">
        <h1 className="titre">Top Sellers</h1>
        <div className="topSellers">
          <img
            className="leftarrow"
            onClick={scrollleft}
            src="img/leftarrow.png"
            alt=""
          />
          <img
            className="rightarrow"
            onClick={scrollRight}
            src="img/rightarrow.png"
            alt=""
          />
          <div className="sellerscontainer" ref={ref}>
            {sellers.map((seller) => (
              <div
                className="seller"
                onClick={() => {
                  let action = {
                    type: "SET_SELLER",
                    value: { seller: seller },
                  };
                  dispatch(action);
                  history.push("/profile");
                }}
              >
                <div className="number">{seller.num}</div>
                <div className="infoseller">
                  <div className="sellerimg">
                    <img src={seller.img} alt="" className="profileimg"></img>
                    <img src="img/tick.png" alt="" className="verify"></img>
                  </div>
                  <p>{seller.name}</p>
                  <p>{seller.info1} ETH</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="items">
        <h1 className="titre">Hot Bids</h1>
        <div className="hotbids">
          <Bids></Bids>
        </div>
        <button className="loadmore">Load More</button>
      </div>
    </div>
  );
};
export default Home;
