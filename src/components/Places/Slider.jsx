import React from 'react'
import Shape1 from '../../assets/img/Shape 1.png'
import W1 from '../../assets/img/w1.png'
import Chichen from '../../assets/img/chichen itza.png'
import Wall from '../../assets/img/Great Wall.png'
import Collosum from '../../assets/img/The Colosseum.png'
import Machu from '../../assets/img/Machu Picchu.png'

function Slider() {
  return (
    <div>
        <section id="scroll-categories">

<div className="scroll-bar">
    <p id="scroll-bar-title">Natural Wonders in World</p>
</div>
<div className="symbol"><img src={Shape1} alt="end symbol"/></div>

<div className="categories">
    <div className="scard">
        <img src={W1} alt="Egypt" className="scard-img"/>
        <div className="scard-body">
            <p className="scard-title">Northern lights</p>
        </div>
    </div>

    <div className="scard">
        <img src={Chichen} alt="Egypt" className="scard-img"/>
        <div className="scard-body">
            <p className="scard-title">Chichen Itza</p>
        </div>
    </div>

    <div className="scard">
        <img src={Wall} alt="Egypt" className="scard-img"/>
        <div className="scard-body">
            <p className="scard-title">The Great Wall of China</p>
        </div>
    </div>

    <div className="scard">
        <img src={Collosum} alt="Egypt" className="scard-img"/>
        <div className="scard-body">
            <p className="scard-title">The Colosseum</p>
        </div>
    </div>

    <div className="scard">
        <img src={Machu} alt="Egypt" className="scard-img"/>
        <div className="scard-body">
            <p className="scard-title">Machu Picchu</p>
        </div>
    </div>
</div>
</section>
    </div>
  )
}

export default Slider

