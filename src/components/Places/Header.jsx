import React from 'react';
import BackImg from '../../assets/img/Taj-Mahal.png'
import Logo from '../../assets/img/logo.png'
import Srch from '../../assets/img/search.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
function Header({setSearch}) {

    const [searchContent, setSearchContent] = useState('')
    function handleClick (){
        setSearch(searchContent)

    }
  return (
    <div>
        <header>
        <div className="header-in">
            <nav className="navbar">
                <Link to ='/'>
                <div className="home-icon">
                    <img src={Logo} alt="" className="home-icon" />
                </div>
                </Link>

                <div className="home-nav">
                    <a href="#home"><h6 className="home-h6">HOME</h6></a>
                    <a href="#scroll-attractions"><h6 className="home-h6">TOURIST ATTRACTIONS</h6></a>
                    <a href="#places-info"><h6 className="home-h6">WONDERS IN WORLD</h6></a>
                    <a href="#mapi"><h6 className="home-h6">FAVOURITE</h6></a>
                </div>
            </nav>

            <section id="home">
                <div className="main-background">
                    <div className="bg-overlay">
                        <img src={BackImg} alt="Taj Mahal Image" className="main-bg"/>
                    </div>

                    <h3 className="heading">Let's Travel the World...!</h3>
                    {/* <span class="txt anim-text-flow">Let's Travel the World...!</span> */}
                    
                    <div className="search-bar">
                        <input type="text" onChange={(e)=>{setSearchContent(e.target.value)}} className="text" placeholder="Search your destination"/>
                        <img className="search-bar-logo" onClick={handleClick} src={Srch} alt="search" width="25px" height="25px"/>
                    </div>
                </div>
            </section>


        </div>
    </header>
    </div>
  )
}

export default Header