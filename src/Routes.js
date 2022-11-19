import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import Loader from "./components/loader";

const Home = lazy(() => import('./pages/home'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;