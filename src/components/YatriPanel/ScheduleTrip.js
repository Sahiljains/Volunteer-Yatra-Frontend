// eslint-disable-next-line
import { Link } from 'react-router-dom';
import { React,useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import trip from '../../assets/images/trip.png'
import designelement from '../../assets/images/DesignElement.png'
import wholeImg from '../../assets/images/wholeImg.png'


import './ScheduleTrip.scss'

 
const yatriname = {
  margin: '27px 12px'

}

const ScheduleTrip = () => {
  useEffect(() => window.scrollTo(0, window.innerHeight / 2.2), [])
  return (
    <>
      <Header />
      <Navbar />
      <br></br>

      <div className='container'>
        <div className='row text-bold no-gutters'>
          <div className='column col col-xs-4' >
            <h4 className='text-bold lead' style={yatriname}>
              Hello, Tushar!!
            </h4>
            <br></br>
          </div>
        </div>
        <img className="wholeImg" src={wholeImg} alt=''/>
        <div className='container-fluid plan-trip'>
        <div className='row vertical-margin'>
          <div className='col-sm-6' id=''>
            <div className='card'>
              <h3 className='normaltrip'>
               Schedule a <br />
                Trip
              </h3>
              <br></br>
              <h3 className='text-semi-bold'>
                INR 999/-
              </h3>
              <br></br>
              <h5 className="nomalfeatures">Features :</h5>
              <ol>
                <li>Choose a single project ( upto 1 month )</li>
                <li>Acces to public community group</li>
                <li>Learn & develop new skills</li>
              </ol>
              <br></br>
              <br></br><br></br>
              
            <img className="designImg" src={designelement} alt='' />
              <button type='submit' class='tripbutton btn btn-default'>Plan a trip</button>
              <img  className="tripImg" src={trip} alt='' />
            </div>
            
          </div>
          <div className='col-sm-6' id=''>
            <div className='card'>
              <h3 className='advancetrip'>
                Join our <br />
                Community
              </h3>
              <br></br>
              <h3 className='text-semi-bold'>
                INR 1999/-
              </h3>
              <br></br>
              <h5 className="advancefeatures">Features :</h5>
              <ol>
              
                <li>Choose many projects ( upto 1 year )</li>
                <li>Access to pro community group</li>
                <li>TSA fellowship</li>
                <li>Live as Digital Nomad</li>
               
              </ol>
              
              <br></br> <br></br>
            
            <img className="designImg" src={designelement} alt='' />
            <button type='submit' class='advancetripbutton btn btn-default'>Plan a trip</button>
              <img className="tripImg" src={trip} alt='' />
            </div>
           
          </div>
        </div>
      </div>
    

      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  )
}

export default ScheduleTrip