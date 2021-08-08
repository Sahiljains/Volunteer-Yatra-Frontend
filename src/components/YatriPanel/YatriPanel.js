// eslint-disable-next-line
import { Link } from 'react-router-dom';
import { React,useEffect } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { fontawesome } from 'font-awesome/css/font-awesome.min.css';
import { Card } from 'react-bootstrap';
import { FaShareAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

import { Form } from "react-bootstrap";

import star from '../../assets/vectors/star.svg'

import { Button, Row, Col, CardGroup } from 'react-bootstrap'
import './YatriPanel.scss'


const yatriname = {
  margin: '27px 12px'

}

const search = {
  margin: '10px 140px',
}


const Upcomingyatra = {
  width: '600px',
  height: '270px',
  borderRadius: '10px',
  backgroundColor: 'White',
}

const explorecard = {
  width: 'flex',
  height: '250px',
  borderRadius: '10px',
  backgroundColor: 'White',
}

const lastvisited = {
  width: 'flex',
  height: '270px',
  borderRadius: '10px',
  backgroundColor: 'White',
}

const oppurtunity = {
  title: 'Lorem ipsum dolor sit, amet, consectetur elit.',
  location: 'Jaipur, Rajasthan',
  rating: 4.5,
  filters: ['10 days', 'Host Type 1', 'Exp. Type 1'],
  perks: ['Perk1', 'Perk2', 'Perk 3'],
}

const YatriPanel = () => {
  useEffect(() => window.scrollTo(0, 0), [])
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
            {/* 
                    <div className='column col col-xs-4' >
                      <a><i class="fas fa-bell" aria-hidden="true"></i></a>
                    </div>
                    <div className='column col col-xs-4' >
                      <a><i class="fas fa-cog" aria-hidden="true"></i></a>
                    </div> */}

          </div>

          <div>



            <div className='row'>
             <div className='column col col-xs-2' >
             <Link to="/paymentpage"> <button type='submit' class='applybtn btn btn-default'><fontawesome><i class="fa fa-plus-square" aria-hidden="true"></i></fontawesome>Apply Now</button></Link>
              </div>

              <div className='column col col-xs-10' >
                <Card className='up'>
                  <Card.Body>
                    <Card.Text className='ctext'>
                      <span>Upcoming Yatra - Rajasthan</span>
                      <span>10 days left</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <br></br>
            <br></br>
            <br></br>


            <div className='row' >
              <div className='column col col-xs-4' >
            <h5>Upcoming Yatra</h5>
            <br></br>

            <div className='row' >
              <Card style={Upcomingyatra}>

                <Card.Body>

                  <div className='row' >
                    <Card.Text className="upcomingyatridate">2nd July,2021</Card.Text>

                    <div className='column col col-xs-4 upcomingyatriimage' >
                      <Card.Img variant="top" src="https://5.imimg.com/data5/GU/ON/WZ/SELLER-17262927/rajasthan-desert-tour-500x500.png" />

                      <Card.Text className="upcomingyatrides">
                        Rajasthan
                      </Card.Text>
                    </div>


                    <div className='column col col-xs-4' >
                      <Card.Text className="upcomingyatridet">
                        Host - Sidhu Sodhi
                        <br></br>
                        <br></br>
                        Duration - 15 Days
                        <br></br>
                        <br></br>
                        My Skill - Motion Graphics
                        <br></br>
                        <br></br>
                        Learning outcome - Photography
                      </Card.Text>
                    </div>
                  </div>

                </Card.Body>

              </Card>
              <br></br>
            </div>
            </div>

            <div className='column col col-xs-4' >
            <h5>Last Visited</h5>
            <br></br>

            <div className='row'>
            <div className='column col col-xs-4' >
              <Card style={lastvisited}>

                <Card.Body>

                  <div className='row' >

                    <div className='column col col-xs-4' >
                      <Card.Img variant="top" src="https://5.imimg.com/data5/GU/ON/WZ/SELLER-17262927/rajasthan-desert-tour-500x500.png" />
                    </div>


                    <div className='column col col-xs-4' >
                      <Card.Text className="upcomingyatridet">
                      Rajasthan
                        <br></br>
                      Rate -
                        <br></br>
                        Learning -
                        <br></br>
                      </Card.Text>
                    </div>
                  </div>
                  <br></br>

                
                  <div className='row' >
              <div className='column col col-xs-4' ><h6>My Experience</h6></div>
              <div className='column col col-xs-4' ><FaShareAlt /></div>
              <div className='column col col-xs-4' ><AiOutlineHeart /></div>
            
                  
              
                <Form.Group controlId="">
                  <Form.Control rows={3} />
                </Form.Group>
                  </div>
                  
                  <div className='row' >
                <button type='submit' class='gallerybtn btn btn-default'><fontawesome><i class="far fa-image"></i></fontawesome>Gallery</button>
                  </div>
                </Card.Body>

              </Card>
              </div>

              <div className='column col col-xs-4' >
              <Card style={lastvisited}>

                <Card.Body>

                  <div className='row' >

                    <div className='column col col-xs-4' >
                      <Card.Img variant="top" src="https://5.imimg.com/data5/GU/ON/WZ/SELLER-17262927/rajasthan-desert-tour-500x500.png" />
                    </div>


                    <div className='column col col-xs-4' >
                      <Card.Text className="upcomingyatridet">
                      Rajasthan
                        <br></br>
                      Rate - 
                      {/* <div className='rating gray d-flex align-items-center'>
                        <img src={star} alt='' />
                      </div> */}
                     
                        <br></br>
                        Learning -
                        <br></br>
                      </Card.Text>
                    </div>
                  </div>

                  <br></br>
                

                  <div className='row' >
              <div className='column col col-xs-4' ><h6>My Experience</h6></div>
              <div className='column col col-xs-4' ><FaShareAlt /></div>
              <div className='column col col-xs-4' ><AiOutlineHeart /></div>
            
                  
              
                <Form.Group controlId="">
                  <Form.Control rows={3} />
                </Form.Group>
                  </div>
                  
                  <div className='row' >
                <button type='submit' class='gallerybtn btn btn-default'><fontawesome><i class="far fa-image"></i></fontawesome>Gallery</button>
                  </div>


                </Card.Body>

              </Card>
              </div>

            
              <br></br>
            </div>
            </div>


</div>

            <br></br>
            <br></br>


            <div className='row' >
              <div className='column col col-xs-4' >
                <h5>Explore</h5>
                <br></br>
                <div className='row' >
                  <div className='column col col-xs-4' >
                    <Card style={explorecard}>

                      <Card.Body>
                        <div className='row'>
                          <div className='column col col-xs-4 exploreimage'>
                            <Card.Img  src="https://www.mapsofindia.com/maps/rajasthan/images/rajasthan.jpg"  width="500" height="180"  />
                            <Card.Text className="exploretext"> Rajasthan </Card.Text>
                          </div>
                          <div className='column col col-xs-4 exploreimage'>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/dimol/dimol1602/dimol160200142/53414767-sam-sand-dunes-in-thar-desert-rajasthan-india.jpg" width="500" height="180" />
                            <Card.Text  className="exploretext" > Rajasthan </Card.Text>
                          </div>
                          <div className='column col col-xs-4 exploreimage'>
                            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/Jaipur-Hawa-Mahal-PTI.jpeg?HiU2FuRehhM2zqChbruazhDZvhYtvt8h&size=770:433" width="500" height="180"/>
                            <Card.Text  className="exploretext"> Rajasthan </Card.Text>
                          </div>
                        </div>

                      </Card.Body>
                    </Card>
                  </div>
                  </div>
                  </div>


               
                  <div className='column col col-xs-4' >
                  <h5>Benefits</h5>
                  <br></br>
                    <Card style={explorecard}>
                      <Card.Body>

                        <div className='row' >
                          <div className='column col col-xs-4 '>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='column col col-xs-4'>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='column col col-xs-4'>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card className='block'></Card>
                          </div>
                          <div className='column col col-xs-4'>
                            <Card.Text className="blockname"> Exchange of skills </Card.Text>
                          </div>
                        </div>






                      </Card.Body>
                    </Card>

                  </div>
                  <br></br>
              
            
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

export default YatriPanel