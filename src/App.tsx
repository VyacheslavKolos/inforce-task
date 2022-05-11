import React from 'react';
import {Navigate,Route, Routes} from "react-router-dom";

import {Layout, ProductsList} from "./components";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route path={'/product-list'} element={<ProductsList/>}/>

                    <Route
                        path="/"
                        element={<Navigate to="/product-list"  />}
                    />

                </Route>
            </Routes>

        </div>
    );
};

export default App;
