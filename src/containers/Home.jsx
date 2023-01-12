import React from 'react';
import { useEffect, useState } from 'react';
import Attractions from '../components/Places/Attractions';
import FootBody from '../components/Places/FootBody';
import Header from '../components/Places/Header';
import Maps from '../components/Places/Maps'
import PlaceInfo from '../components/Places/PlaceInfo';
import Slider from '../components/Places/Slider';
import axios from 'axios'

const Home = () => {
    const [search, setSearch ] = useState('')


    return (
        <section className="content">
            <Header setSearch={setSearch}/>  
            <Slider/>   
            <Attractions search={search} />
            <PlaceInfo/>
            <Maps />
            <FootBody/>
        </section>
    );
};

export default Home;
