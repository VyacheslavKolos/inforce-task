import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'
import {AddDialogWindow} from "../AddDialogWindow/AddDialogWindow";

const Header:FC = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={'/product-list'}>Products</NavLink>
                <AddDialogWindow/>
            </div>
        </div>
    );
};

export {Header};
