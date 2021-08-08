import { lazy, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PageConnect from '../../components/layout/PageConnect'
import landingBG from '../../assets/images/bg.png'
import landingText from '../../assets/images/main-title-img.png'
import travelpng from '../../assets/images/travel-text.png'
import langingImgButton from '../../assets/buttons/community_button.png'
import communityButtonBlue from '../../assets/buttons/community_button_blue.png'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import * as ReactBootStrap from "react-bootstrap"




const Adminyatridetails = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    const players = [
        { SN: "1",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "2",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "3",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "4",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "5",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "6",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "7",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "8",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "9",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "10",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "11",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "12",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
        { SN: "13",ID:"52479Dsg452WE", FirstName: "Tushar", LastName: "Garg", EmailAddress: "tushargarg123@gmail.com", Age: "25", Gender: "M", MobileNo: "6295521258", Status: "Not Applied" },
    ]

    const renderPlayer = (player, index) => {
        return (
            <tr key={index}>
                <td>{player.SN}</td>
                <td>{player.ID}</td>
                <td>{player.FirstName}</td>
                <td>{player.LastName}</td>
                <td>{player.EmailAddress}</td>
                <td>{player.Age}</td>
                <td>{player.Gender}</td>
                <td>{player.MobileNo}</td>
                <td>{player.Status}</td>

            </tr>
        )
    }
    const tblatyle={
        margin: '-20px 70px'
    }
    const notifications ={
        margin:'20px 20px',
        display:'flex',
        
       }
    
     const search={
         margin:'10px 140px',
     }
     const adminheading={
         margin:'27px 25px'
    
     }
     const lable={
         marginTop:'20px',
         marginBottom:'30px',
         fontWeight:'600',
         fontSize:'18px'
     

     }

   







    return (
        <>
            <Header />
            <Navbar />
            <div className='container'>
                <div className='row text-bold no-gutters'>
                    <div className='column col col-xs-4' >
                    <Link to='admin'>  <h4 className='text-bold lead' style={adminheading}>
                            Admin Dashboard
                        </h4></Link>
                    </div>
                   
                  

                    <div className='column col col-xs-4' style={search}>
                        
                    </div>
                    <div className='column col col-xs-4' style={notifications} >
                        <Link className='nav-link' to='adminnotification' >
                        Notifications &nbsp;
                        </Link>
                   
                        <Link className='nav-link' to='dsfsd#' >
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
                
               
            <div className="tbl" style={tblatyle}>
            <label style={lable}><input type="checkbox" />  Show only Not Applied Yatri</label>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>ID. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Mobile No.</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(renderPlayer)}

                    </tbody>
                </ReactBootStrap.Table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer />


        </>
    )
}

export default Adminyatridetails