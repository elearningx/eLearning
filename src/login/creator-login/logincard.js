import React from "react";
import { BrowserRouter,Route,Routes,NavLink } from "react-router-dom";
import  login from "../../assets/img/login.png";
import { Login } from "./login";
import { Register } from "./register";
import '../../assets/css/login.css';

export function LoginLayout(){

    return(
        <BrowserRouter>
            <div className="container">
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="login">
                    <img src={login} alt="login-img" />
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5">
                <p className="mt-5">Welcome to LMS</p>

                    <nav className="mt-2">
                        <NavLink to='/' activeclassname="active">Login</NavLink>
                        <NavLink to='/register' activeclassname="active">Register</NavLink>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='*' element={<h1>No page Found</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
} 