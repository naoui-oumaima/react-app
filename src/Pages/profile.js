import React from "react";
import Bids from "../components/bids";
import { FormControl } from "react-bootstrap";
import { FaSistrix } from 'react-icons/fa';


const Profile = () => {
  return (
    <div className="body">
      <div className="infoProfile">
        <div>
          <img src="img/miaprofile.png" alt="" />
        </div>
        <h1>Mia Ayana</h1>
      </div>
      <img className="couv" src="img/couv.png" alt="" />
      <div className="input_select">
      <div className="searchprof">
            <FaSistrix/>
                <FormControl
                    type="search"
                    placeholder="Search Item Here"
                    className="search"
                    aria-label="Search">
                </FormControl>
            </div>
        <select className="searchSelect">
            <option value="Recently Listed">Recently Listed</option>
            {/* <option value="Recently Listed">Recently Listed</option> */}
        </select>
      </div>
      <div className="bidsprof">
        <Bids></Bids>
      </div>
      <button className="loadmore">Load More</button>
    </div>
  );
};
export default Profile;
