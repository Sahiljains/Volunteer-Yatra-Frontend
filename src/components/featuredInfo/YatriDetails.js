import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./YatriDetails.scss";
import FeaturedInfo from './FeaturedInfo';
import { Link } from 'react-router-dom'

const adminheading={
margin:'37px 35px'
}

const YatriDetails = () => {
return (
<>
<Header />
<Navbar />

<div className='container'>
   <div className='row text-bold no-gutters'>
      <div className='column col col-xs-4' >
       <h4 className='text-bold lead' style={adminheading}>
            Yatri Activities
         </h4>
      </div>
   </div>
</div>
<div className='container'>
   <div className="featured">
      <div className="featuredItem">
         <span className="featuredTitle">Total Accounts of Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Total Applied Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Not Applied Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
   </div>
   <br></br>
</div>
<div className='container'>
   <div className="yfeatured">

      <div className="yfeaturedItem">
         <span className="yfeaturedTitle">Deleted Accounts</span>
         <div className="yfeaturedMoneyContainer">
            <span className="yfeaturedMoney">2,415</span>
         </div>
      </div>
   
   </div>
</div>
<br></br>
<br></br>

<br></br>
<Footer />
</>
)
}
export default YatriDetails