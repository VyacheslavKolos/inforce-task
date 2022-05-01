import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import './Layout.css'

const Layout:FC = () => {
    return (
        <div className={'Layout-wrap'}>

                <Header/>
            <div className={'layout-container'}>

                <Outlet/>

            </div>
        </div>
    );
};

export {Layout};
