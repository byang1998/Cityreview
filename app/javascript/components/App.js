import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cities from "./Cities/Cities"
import City from "./City/City"
import Login from './Auth/Login'
import Navbar from './Navbar'
import styled from 'styled-components'


const App = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Routes>
            <Route exact path="/" component={<Cities/>} />
            <Route exact path="/cities/:slug" component={<City/>} />
            <Route path="/login" component={<Login/>} />
            </Routes>
        </Wrapper>
    )

}

export default App;

const Wrapper = styled.div`
// background-color:red;
margin:0;
padding:0;

`