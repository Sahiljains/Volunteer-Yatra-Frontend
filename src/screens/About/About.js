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
 import './about.css'

import { Button, Row, Col, CardGroup } from 'react-bootstrap'
 const PageImage = lazy(() => import('../../components/PageImage/PageImage'))

 const About = () => {
   useEffect(() => window.scrollTo(0, 0), [])
   return (
     <>
       <Header />
       <Navbar />
       <PageImage style="text-align:right" imgSrc={landingBG} imgTitle={landingText} imgBtn={langingImgButton} />

       <div className='containerr'>

         <div className="abtfst">


         <p className='text-content'>
           Volunteer Yatra is a non for                   profit</p>
         <p className="scnd"> volunteertravel initiative, where we </p>
         <p className="scndd">elevate rural areas by  mobilizing </p>
         <p className="scnddd"> creative & problem  solving skilled</p>
         <p className="scndddd"> people from urban areas.
             </p></div>




       </div>
       <div className="abtcontainer">
         <div className="abtheader">
         <img  className="sss" Src={travelpng} alt="travel.png" />

         </div>
         <div className="abtppa">

           <p className="abtp">Making travelling affordable</p>

           <p className="abtp2">for everyone by connecting </p>

           <p className="abtp3">travellers and host accross</p>
           <p className="abtp4"> India who offer food and</p>
           <p className="abtp5"> accommodation in </p>
           <p className="abtp6"> exchange of skills.</p>

         </div>
         <div class="res-circle">
           <div class="circle-txt">Our Purpose</div>
         </div>
       </div>


       <div className="abtppa">
       <h1 className='text-bold'>Key <br></br>Benefits!</h1>
      </div>
     <div className='container-fluid vertical-margin key-benefits'>

         <div className='row'>
           <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
             <p className='py-3 p1 text-medium lead'>
               Travel for free
             </p>
           </div>
           <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
             <p className='py-3 px-5 p1 text-medium lead'>
               Learn and develope new skills
             </p>
           </div>
           <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
             <p className='py-3 p1 text-medium lead'>
               Have unique experience
             </p>
           </div>
         </div>
       </div>
       <PageConnect
         color='yellow'
         content={
           <>
             <h3 className='text-semi-bold lead text-center my-4 mx-5 px-5'>
               <b>Want to join us and have the experience of your life?</b>
               <br></br>
               Find unique places where you can exchange your skills for accomodation
             </h3>.
           </>
         }
       />
       <div>
         <br></br><br></br>
         <Link to='/register/yatri' className='cbb'>
           <img src={communityButtonBlue} alt='' style='' className='cursor zoom-2 pb-5' style={{ width: '20%' }} />
         </Link>
         <br></br>
       </div>

       {/* <Switch>
           <Route exact path='/blogs' component={Popular} />
           <Route exact path='/blogs/:slug' component={SingleBlog} />
         </Switch> */}
       <Footer />
     </>
   )
 }

 export default About


// const card={
//   textAlign:'center',
//   fontWeight: '700',
//   fontSize:'40px',
//   marginTop: '150px'
// }
// const cardstyle={
//   height:'400px',
//   width:'400px',
//   borderRadius:'10px',
//   margin:'70px 270px',
//   display:'flex',
//   cursor: 'pointer',
//   webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
//   boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
//   backgroundColor: 'rgb(232,235,236)'
// }
// const cardd={
//   textAlign:'center',
//   fontWeight: '700',
//   fontSize:'40px',
//   marginTop: '150px'
// }
// const cardstylee={
//   height:'400px',
//   width:'400px',
//   borderRadius:'10px',
//   margin:'-470px 750px',
//   display:'flex',
//   cursor: 'pointer',
//   webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
//   boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
//   backgroundColor: 'White'

// }


// const About = () => {
//   useEffect(() => window.scrollTo(0, 0), [])
//   return (
//     <>
//       <Header />
//       <Navbar />


//       <Card style={cardstyle}>
//         <Card.Body>

//          <Link to='/yatriactivity'> <Card.Title style={card}>Yatri</Card.Title></Link>

//         </Card.Body>
//       </Card>
//       <Card style={cardstylee}>
//         <Card.Body>
//         <Link to='/hostactivity'> <Card.Title style={cardd}>Host</Card.Title></Link>

//         </Card.Body>
//       </Card>



//     </>
//   )
// }
// export default About




