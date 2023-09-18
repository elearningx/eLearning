import React from "react";
import { Link } from "react-router-dom";
// import SimpleReactValidator from "simple-react-validator";

export function Login(){

    const handleLogin=()=>{
        console.log('hiii')
    }

    return(
        <div className="container text-start login-form">
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="my-4">
                <label htmlFor="username" className="form-label ">Username</label>
                <input className="form-control" type="text" placeholder="Enter your Username" id="username"/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="password" className="form-label mt-2">Password</label>
                <input className="form-control" type="password" placeholder="Enter your Password" id="password"/>
            </div>
            <div className="row justify-content-between">
                <div className="col ">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="remember"/>
                        <label htmlFor="remember" className="form-check-label">Remember me</label>
                    </div>
                </div>
                <div className="col text-end">
                    <Link to='/forgot-pwd'>Forgot Password?</Link>
                </div>
            </div>
            <div className="text-end">
                <button className="btn btn-theme-primary btn-login" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}