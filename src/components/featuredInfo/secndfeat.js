import { Link } from 'react-router-dom';
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';


import Adminyatridetails from "./Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';
import "./featuredInfo.css";
import FeatureInfo from './featureinfo';






function Secndfeat() {
  return (
 
    
        <div className="featured">
             <div className="featuredItem2" >
             <Link to='/allyatridetails'><div className="featuredTitle2">All Yatri Details</div></Link>
               
              </div>
              
        
              <div className="featuredItem2">
                <span className="featuredTitle2">Traffic</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney"> % </span>
                </div>
              </div>
        
              <div className="featuredItem2">
              <Link to='/allhostdetails'> <div className="featuredTitle2">All Host Details</div></Link>
                
              </div>
              
            </div>

    
	
);
}
export default Secndfeat
