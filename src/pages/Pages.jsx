import React from 'react';
import Home from "./Home";
import {Routes,Route} from 'react-router-dom';
import Cuisine from "./Cuisine";

const Pages = () => {
    return (
            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route path={"/cuisine/:type"} element={<Cuisine />} />
            </Routes>
    );
};

export default Pages;