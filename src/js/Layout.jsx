import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx"
import UserPage from "./views/UserPage.jsx"
//create your first componentnpm
const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<NotFound />} path="*" />
                <Route element={<UserPage />} path="/userpage/:user" />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
