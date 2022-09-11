import React from "react";
import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {username, password}
        fetch("http://localhost:3000/", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(credentials)
        }).then(() => {
            console.log(credentials)
            navigate("/Account")
        })
    }

    return (
        <div className="Sign-in">
            <div className="Sign-in-text">
                <h1>Log in</h1>
            </div>
            <form onSubmit={handleSubmit} className="SignIn-form" action="" method="post">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary" value="submit" onSubmit=""><Link to="/Account">Submit</Link></button>
            </form>
        </div>
    )
}

export default SignIn