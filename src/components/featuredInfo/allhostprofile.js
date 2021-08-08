
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { Card } from 'react-bootstrap'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import pic from '../../assets/images/bg.png';

import * as ReactBootStrap from "react-bootstrap"

import "./profilePage.scss";

import { FiEdit } from "react-icons/fi";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";



const notifications = {
  margin: '20px 20px',
  display: 'flex',

}

const search = {
  margin: '10px 140px',
}
const adminheading = {
  margin: '27px 25px'

}

const card = {
  margin: '0px 120px',
  fontWeight: '500',
  cursor: 'pointer',
  webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',

}

const Allhostprofile = () => {




  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const [device, setDevice] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [opportunities, setOpportunities] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => window.scrollTo(0, window.innerHeight / 100), []);

  const profileform = (
    <>
      <Card style={card}>

        <Card.Body>
          <div class="cd">
            <div className='row'>
              <div className='col-md-2'>
                <img className='image' src={pic}></img>
              </div>
              <br></br>
              <br></br>
              <div className='col-md-8 '>
                <h5 className="profilename">Tushar Garg</h5>
                <Form.Group className="bioo" controlId="">
                  <Form.Control className="bi" rows={3} />
                  <h6 className="briefinfo">Brief description about yourself</h6>
                </Form.Group>
                {/* <input  type="text" class="bio">

              </input> */}

              </div>
            </div>

            <br></br>
            <br></br>

            <div class="label">
              <br></br>
              <h4><span class="_1mHr1S">BASIC INFORMATION</span><span class="oKZoMVVV"></span></h4></div>


            <div className='row'>
              <div className='col-md-4' >
                <h6 className="basicfirstname">First Name</h6>
                <input type="text" id='basicinfo1' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={firstname} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className='col-md-4' >
                <h6 className="basiclastname">Last Name</h6>
                <input type="text" id='basicinfo2' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={lastname} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="basichostid">Host Id</h6>
                <input type="text" id='basicinfo3' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={id} onChange={(e) => setId(e.target.value)} />
              </div>
            </div>
            <br></br>

            <div className='row'>
              <div className='col-md-4'>
                <h6 className="basicgender">Gender</h6>
                <input type="text" id='basicinfo4' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={gender} onChange={(e) => setGender(e.target.value)} />
              </div>
            </div>



            <br></br>

            <div class="label">
              <br></br>
              <h4><span class="_1mHr1S">PERSONAL INFORMATION</span><span class="oKZoMVVV"></span></h4></div>


            <div className='row'>
              <div className='col-md-4'>
                <h6 className="personalemail">Email address</h6>
                <input type="text" id='personalinfo1' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personalcontact">contact No</h6>
                <input type="text" id='personalinfo2' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personalcity">City</h6>
                <input type="text" id='personalinfo3' class="_1w3ZZo _1YmvCG _2mFmU7"  autoFocus required value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
            </div>
            <br></br>
            <div className='row'>
            <div className='col-md-4'>
                <h6 className="personalstate">State</h6>
                <input type="text" id='personalinfo4' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={state} onChange={(e) => setState(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personaladdress">Address</h6>
                <input type="text" id='personalinfo5' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personalzip">Zip</h6>
                <input type="text" id='personalinfo6' class="_1w3ZZo _1YmvCG _2mFmU7"  autoFocus required value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-md-4'>
                <h6 className="personalpassword" >Change Paasword</h6>
                <input type="text" id='personalinfo7' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personaldevice">Where you're logged in</h6>
                <input type="text" id='personalinfo8' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={device} onChange={(e) => setDevice(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="personalopportunities">Total Opportunities</h6>
                <input type="text" id='personalinfo9' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={opportunities} onChange={(e) => setOpportunities(e.target.value)} />
              </div>
            </div>
            
            <br></br>

            <div class="label">
              <br></br>
              <h4><span class="_1mHr1S">SOCIAL LINKS</span><span class="oKZoMVVV" ></span></h4></div>


            <div className='row'>
              <div className='col-md-4'>
                <h6 className="socialinsta">Instagram link</h6>
                <input type="text" id='social1' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={insta} onChange={(e) => setInsta(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="socialfacebook">Facebook link</h6>
                <input type="text" id='social2' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={facebook} onChange={(e) => setFacebook(e.target.value)} />
              </div>
              <div className='col-md-4'>
                <h6 className="socialrating">Ratings</h6>
                <input type="text" id='social3' class="_1w3ZZo _1YmvCG _2mFmU7" autoFocus required value={rating} onChange={(e) => setRating(e.target.value)} />
              </div>


            </div>

            




          </div>
          <br></br>
          <br></br>
      

        </Card.Body>
        <br></br>
      </Card>
    </>
  );




  return (
    <>
      <Header />
      <Navbar />

     
      <br></br>
      <br></br>
      <br></br>

      <div

      >
        {profileform}
      </div>



      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  )
}

export default Allhostprofile