import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRoutes;