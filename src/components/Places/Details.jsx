import React, {useEffect} from 'react'
import Artemis from '../../assets/img/Temple Artemis.png'
import Larrow from '../../assets/img/Left arrow.png'
import G58 from '../../assets/img/Mask Group 58.png'
import G59 from '../../assets/img/Mask Group 59.png'
import G60 from '../../assets/img/Mask Group 60.png'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Maps from '../Places/Maps'
import PlaceInfo from './PlaceInfo'
import FootBody from './FootBody'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png'


function Details() {
  const {id} = useParams()
  const [place, setPlace] = useState('')
  useEffect (()=>{
    const url = 'http://127.0.0.1:8000/places/?id='+id
    axios.get(url).then((res)=>{setPlace(res.data.results)})
   },[])
  const location = useLocation()
  const state = location.state
  console.log(place);


  
  return (
    <>
       <header>
        <div className="header-in">
            <nav className="navbar">
                <Link to ='/'>
                <div className="home-icon">
                    <img src={Logo} alt="" className="home-icon" />
                </div>
                </Link>
                

                {/* <div className="home-nav">
                    <a href="#home"><h6 className="home-h6">HOME</h6></a>
                    <a href="#scroll-attractions"><h6 className="home-h6">TOURIST ATTRACTIONS</h6></a>
                    <a href="#places-info"><h6 className="home-h6">WONDERS IN WORLD</h6></a>
                    <a href="#mapi"><h6 className="home-h6">FAVOURITE</h6></a>
                </div> */}
            </nav>
        </div>
    </header>
        <section id="home2">
          <div className="main-background">

                    <div className="details-page">
                        <img src={place[0]?.image} alt="Temple Artemis" className="details-page-image"/>
                        <div className="layover">
                          <img className="arw" src={Larrow} alt="Left arrow"/>
                          <img src={G58} alt="Mask Group 58"/>
                          <img src={G59} alt="Mask Group 59"/>
                          <img src={G60} alt="Mask Group 60"/>
                        </div>
                    </div>
            
                    <div className="detail-info">
                      <h4 className="detail-info-title">
                        {place[0]?.name}
                      </h4>
                      {/* <p className="detail-info-para">The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and fragments of the last temple remain.
                        While little is known about the temple's appearance, Antipater of Sidon, who described the Seven Wonders said: <br/><br/></p>
                        
                        <p>“…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their brilliancy, and I said, 'Lo, apart from Olympus,
                        the Sun never looked on aught so grand.'” <br/><br/></p>
                        
                        <p>The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and fragments of the last temple remain.
                        While little is known about the temple's appearance, Antipater of Sidon, who described the Seven Wonders said: <br/><br/></p>
                        
                        <p>“…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their brilliancy, and I said, 'Lo, apart from Olympus,
                        the Sun never looked on aught so grand.'” <br/><br/></p>
                        
                        <p>The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and fragments of the last temple remain.
                        While little is known about the temple's appearance, Antipater of Sidon, who described the Seven Wonders said: <br/><br/></p>
                        
                        <p>“…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their brilliancy, and I said, 'Lo, apart from Olympus,
                        the Sun never looked on aught so grand.'” <br/><br/></p>
                        
                        <p>The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and fragments of the last temple remain.
                        While little is known about the temple's appearance, Antipater of Sidon, who described the Seven Wonders said 
                        </p>   */}
                        <p>{place[0]?.decription}</p>
             </div> 
             </div>
        </section>
        <Maps />
        <FootBody />
    </>
  )
}

export default Details