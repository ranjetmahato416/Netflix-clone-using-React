import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Register from '../Register/Register'
import Tab1 from '../Tabs/Tab1';
import Tab11 from '../Tabs/Tab11';
import Tab12 from '../Tabs/Tab12';
import Tab13 from '../Tabs/Tab13';

function Body() {
    return (
        <div>
            <Register/>
            <Tab1/>
            <BrowserRouter>
            <Routes></Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body
