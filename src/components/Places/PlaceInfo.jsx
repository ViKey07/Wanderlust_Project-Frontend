import React from 'react'
import BackDis from '../../assets/img/Back-dis.png'
import Shape2 from '../../assets/img/Shape 2.png'
import Offerwonder from '../../assets/img/offerwonder.png'
import Searchh from '../../assets/img/search.png'
import Mapss from '../../assets/img/map-ss.png'
import YoutubeEmbed from '../AnyName'

function PlaceInfo() {
  return (
    <div>
        <section id="places-info">
        <div className="discover">
            <img src={BackDis} alt="back-discover" className="discover-back"/>

        </div>
        <div className="head-dis">
            <p>DISCOVER</p>
            <p>Watch Our Video Tour</p>
            <img src={Shape2} alt="end symbol"/>
 
            <div className="yt-vdo">
                <YoutubeEmbed embedId="3SsK-cxlj_w" /> 
            </div>
        </div>
        

        <div className="offer">
            <img src={Offerwonder} alt="back-offer" className="offer-img"/>
            <h3 className="offer-heading">Get 10% Off on Your Next Travel</h3>
            <p className="offer-info">Maximum discount 1000$ per person</p>
            <div className="search-bar-offer">
                <input type="text" className="offer" placeholder="Search your destination"/>
                <img className="search-offer-logo" src={Searchh} alt="search" width="25px" height="25px"/>
            </div>
        </div>

        

    </section>
    </div>
  )
}

export default PlaceInfo