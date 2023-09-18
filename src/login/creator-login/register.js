import React from "react";

export function Register(){

    return(
        <div className="container text-start login-form">
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="my-3">
                <label htmlFor="email" className="form-label ">Email ID</label>
                <input className="form-control" type="text" placeholder="Enter your Email ID" id="email"/>
            </div>
            <div className="my-3">
                <label htmlFor="username" className="form-label mt-2">Username</label>
                <input className="form-control" type="text" placeholder="Enter your Username" id="username"/>
            </div>
            <div >
                <label htmlFor="password" className="form-label mt-2">Password</label>
                <input className="form-control" type="password" placeholder="Enter your Password" id="password"/>
            </div>
            <div className="text-end">
                <button className="btn btn-theme-primary btn-login">Register</button>
            </div>
        </div>
    )
}