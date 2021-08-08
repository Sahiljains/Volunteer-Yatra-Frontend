import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./HostDetails.scss";
import FeaturedInfo from './FeaturedInfo';

const adminheading={
margin:'37px 35px'
}

const HostDetails = () => {
return (
<>
<Header />
<Navbar />

<div className='container'>
   <div className='row text-bold no-gutters'>
      <div className='column col col-xs-4' >
         <h4 className='text-bold lead' style={adminheading}>
            Host Activities
         </h4>
      </div>
   </div>
</div>
<div className='container'>
   <div className="featured">
      <div className="featuredItem">
         <span className="featuredTitle">Total Accounts of Host</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Total Opportunities</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Recent Opportunities</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
   </div>
   <br></br>
</div>
<div className='container'>
   <div className="featured">

      <div className="featuredItem">
         <span className="featuredTitle">Deleted Accounts</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
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
export default HostDetails