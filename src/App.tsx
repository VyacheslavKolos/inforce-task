import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout, ProductsList} from "./components";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route path={'/product-list'} element={<ProductsList/>}/>
                    <Route path={'/addProduct '} element={<ProductsList/>}/>

                </Route>
            </Routes>

        </div>
    );
};

export default App;
