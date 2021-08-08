import { Link } from 'react-router-dom';
import React from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';


import Adminyatridetails from "../../components/featuredInfo/Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';
import "./featuredInfo.css";



function FeatureInfo() {
    return (
<div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Earnings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 /-</span>
        </div>
      </div>

      <div className="featuredItem2">
        <div className="featuredTitle2">Analytics</div>
       
      </div>

      <div className="featuredItem2">
        <Link to='/recentactivity'><div className="featuredTitle2">Recent Activities</div></Link>
  
      </div>
      
    </div>
    	
  );
}
export default FeatureInfo