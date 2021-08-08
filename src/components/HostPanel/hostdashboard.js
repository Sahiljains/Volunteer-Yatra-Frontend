import { Link } from 'react-router-dom';
import {React,useEffect} from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row, Col, CardGroup } from 'react-bootstrap'
import {BsFillPlusCircleFill} from "react-icons/bs"


const cardforcard = {
    height: '200px',
    width: '600px',
    borderRadius: '10px',
    marginLeft: '450px',


    cursor: 'pointer',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: '#E8EBEC'

}
const cardcenter = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30px',
    marginTop: '40px',

}
const cardforopportunity = {

    width: '1400px',
    borderRadius: '10px',
    marginLeft: '60px',
    cursor: 'pointer',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: 'White',


}
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
const settings = {
    dots: true,
    fade:true,

    infinite: true,
    speed: 50,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };
  const icondesign={
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30px',
    marginLeft:'730px',

  }





function HostDashboard() {
    useEffect(() => window.scrollTo(0, 0), [])
    return (
        <>
              <div className='container'>
            <div className='row text-bold no-gutters'>
                <div className='column col col-xs-4' >
                   <Link to='hostpanel'> <h4 className='text-bold lead' style={adminheading}>
                        Host Dashboard
                    </h4></Link>
                </div>



                <div className='column col col-xs-4' style={search}>

                </div>
                <div className='column col col-xs-4' style={notifications} >
                    <Link className='nav-link' to='hostnotification' >
                        Notifications &nbsp;
                    </Link>

                    <Link className='nav-link' to='/hostprofile' >
                        Profile &nbsp;
                        &nbsp;
                    </Link>

                    <Link to="/login">
                        <button type="button" className="btn btn-logout zoom-2">
                            <span className="text-bold">Logout</span>
                        </button>
                    </Link>
                </div>


            </div>
            </div>
            <br></br>
            <br></br>

            <Card style={cardforcard}>
         
           
              <Card.Body>
               {/* <BsFillPlusCircleFill style={{marginBottom:'-90px',marginLeft:'250px',fontSize:'30px',fontWeight:'bold'}}  className="commonIcons" /> */}
               <Link to="/createopportunity">   <Card.Text style={cardcenter}>             
                        Create Opportunity
                    </Card.Text>
                    <BsFillPlusCircleFill style={{marginBottom:'600px',marginLeft:'250px',fontSize:'30px',fontWeight:'bold'}}  className="commonIcons" />                    
                    </Link>
                </Card.Body>
            </Card>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='contain er-fluid'>
                <div className='text-semi-bold lead text-center'>
               
                    <h3 style={{textDecoration:'underline'}} className='text-semi-bold lead'>MY OPPORTUNITIES</h3></div>
                <br></br>
                <Card style={cardforopportunity}>
                    <h5 style={{ marginLeft: '10px', paddingTop: '5px' }} className='text-semi-bold row'>Tushar Garg</h5>
                    <Card>
                        <Card.Body>
                            <Card.Title>New Opportunity to Visit Rajasthan. Interested Yatri please apply.</Card.Title>
                            <h6>Jaipur,Rajasthan</h6>
                            <Carousel {...settings}>
                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4021278.jpg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp771809.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/uwp/uwp615285.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp824904.jpeg" />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <hr></hr>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content .
                            </Card.Text>
                           
                        </Card.Body>
                        <Button variant="primary">Total Applied Yatri
                        <div className="featuredMoney"> <span className="featuredMoney">115</span> </div></Button>
                    </Card>
                </Card>
                <br></br>
                <Card style={cardforopportunity}>
                    <h5 style={{ marginLeft: '10px', paddingTop: '5px' }} className='text-semi-bold row'>Tushar Garg</h5>
                    <Card>
                        <Card.Body>
                            <Card.Title>New Opportunity to Visit Rajasthan. Interested Yatri please apply.</Card.Title>
                            <h6>Jaipur,Rajasthan</h6>
                            <Carousel {...settings}>
                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4021278.jpg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp771809.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/uwp/uwp615285.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp824904.jpeg" />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <hr></hr>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content  Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content .
                            </Card.Text>

                        </Card.Body>
                        <Button variant="primary">Total Applied Yatri
                        <div className="featuredMoney"> <span className="featuredMoney">115</span> </div></Button>
                    </Card>
                </Card>
                <br></br>
                <Card style={cardforopportunity}>
                    <h5 style={{ marginLeft: '10px', paddingTop: '5px' }} className='text-semi-bold row'>Tushar Garg</h5>
                    <Card>
                        <Card.Body>
                            <Card.Title>New Opportunity to Visit Rajasthan. Interested Yatri please apply.</Card.Title>
                            <h6>Jaipur,Rajasthan</h6>
                            <Carousel>
                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4021278.jpg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp771809.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/uwp/uwp615285.jpeg" />
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div>
                                        <Card.Img variant="top" src="https://wallpapercave.com/fuwp/uwp824904.jpeg" />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <hr></hr>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content Some quick example text to build on the card title and make up the bulk of
                                the card's content .
                            </Card.Text>
                        
                        </Card.Body>
                        <Button variant="primary">Total Applied Yatri
                        <div className="featuredMoney"> <span className="featuredMoney">115</span> </div></Button>
                    </Card>
                </Card>
            </div>







        </>




    );
}
export default HostDashboard
