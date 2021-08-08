import { Link } from 'react-router-dom'
import Rajasthan from '../../assets/images/Rajasthan.jpg'
import Uttrakhand from '../../assets/images/Uttrakhand.jpg'
import Bihar from '../../assets/images/Bihar.jpg'
import Himachal_Pradesh from '../../assets/images/Himachal Pradesh.jpg'
import Jammu from '../../assets/images/Jammu.jpg'

import leftButtonArrow from '../../assets/buttons/left-button-arrow.png'

const places = [Rajasthan, Uttrakhand, Bihar, Himachal_Pradesh, Jammu]
const names = ['Rajasthan', 'Uttarakhand', 'Bihar', 'Himachal Pradesh', 'Jammu']

const PlaceToVisit = ({ title, showContent }) => {
  return (
    <div className='connect-to-hosts vertical-margin'>
      <div className='container-fluid'>
        <div className='explore-button zoom'>
          <Link to='/travel-oppurtunities'>
            <span className='text-bold'>View all hosts </span>
          </Link>
          <img src={leftButtonArrow} alt='' />
        </div>
        {title === 'Places to Visit' ? <h1 className='text-semi-bold'>Places to Visit</h1> : title}
        {showContent && (
          <p className='p2 pt-2'>
            Choose your favorite location and learn more about the skill exchange programs taking place across India.
          </p>
        )}
      </div>
      <div className='host-items'>
        <div className='container-fluid'>
          <div className='row'>
            {places.map((place, index) => (
              <div className='col' key={index}>
                <Link to={`/travel-oppurtunities/#${names[index]}`}>
                  <div className='frame-container zoom-2'>
                    <div className='image-overlay'></div>
                    <img src={place} alt='' className='main-image' />
                    <div className='img-title'>
                      <span className='text-bold'>{names[index]}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

PlaceToVisit.defaultProps = {
  title: 'Places to Visit',
  showContent: true,
}

export default PlaceToVisit
