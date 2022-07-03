

import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ND from '../components/ND'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import TopColl from '../components/TopColl'

const Home = () => {
    return (
        <div>   
            <Announcement/>  
            <Navbar/>
            <Slider/>
            <ND/> 
            <Categories/>
            <TopColl/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
