import React from 'react'
// import {AcUnit} from "@material-ui/icons"
import './Home.scss'
import Navbar from '../../Components/Navbar'
import Featured from '../../Components/Featured/Featured'
import List from '../../Components/lists/List'

function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
