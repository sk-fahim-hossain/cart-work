import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';



const Main = () => {
    return (
       <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
       </div>
        
    );
};

export default Main;