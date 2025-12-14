import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Auth/Login/Login"
import Register from "../Pages/Auth/Register/Register"
import Error from "../Pages/Error/Error"
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default MainLayout;