import { useEffect, useState } from 'react';
import Shape1 from '../../assets/img/Shape 1.png'
import Egypt from '../../assets/img/Egypt.png'
import Hanging from '../../assets/img/Hanging Graden.png'
import Zeus from '../../assets/img/Statue of Zeus.png'
import Artemis from '../../assets/img/Temple Artemis.png'
import Mouseleum from '../../assets/img/Mouseleum.png'
import Colossus from '../../assets/img/Colossus.png'
import Lighthouse from '../../assets/img/Lighthouse.png'
import Petra from '../../assets/img/Petra.png'
import Christ from '../../assets/img/Christ Redeemer.png'
import Rome from '../../assets/img/colosseum.png'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Attractions({search}) {
    const [places, setPlaces] = useState()
    useEffect (()=>{
        if(search===''){
            axios.get('http://127.0.0.1:8000/places/').then((res)=>{setPlaces(res.data.results)})

        }
    },[search])
    useEffect (()=>{
        if(search){
            axios.get('http://127.0.0.1:8000/places/?search='+search).then((res)=>{setPlaces(res.data.results)})
        }
       },[search])
    console.log(places)
  return (
    <div>
        <section id="scroll-attractions">

<div className="scroll-bar">
    <p id="scroll-bar-title">Tourist Attractions in the World</p>
</div>
<div className="symbol"><img src={Shape1} alt="end symbol"/></div>

<div className="tourists-attractions">


{places && places.length> 0 && places.map(place=>(
        
         <div className="card">
            <Link to={`/categories/${place.id}`} state={{hello:'hello'}}>
        <img src={place.image} alt="Egypt" className="card-img"/>
    </Link>

        <div className="card-body">
            <h3 className="card-title">{place.name}</h3>
            <p className="card-text">{place.short_desc}</p>
        </div>
    </div>
        
    ))}

    {places && places.length === 0 && search !==''&& <>
    <h1>No Places found</h1>
    </>}

</div>
</section>
    </div>
  )
}

export default Attractions