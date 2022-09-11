import React from "react";
import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {username, password}
        setIsPending(true);
        fetch("http://localhost:3000/", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(credentials)
        }).then(() => {
            console.log(credentials)
            setIsPending(false)
            navigate("/Account")
        })
    }

    return (
        <div className="Sign-up">
            <div className="Sign-up-text">
                <h1>Create an account today</h1>
                <h2>
                    Join the 1.1+ million college students who <br/>
                    use SubAlert to manage their subscriptions
                </h2>
            </div>
            <form onSubmit={handleSubmit} className="SignUp-form">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email Address</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                {!isPending && <button type="submit" class="btn btn-primary"> <Link to="/Account">Create Account</Link></button>}
                {isPending && <button type="submit" class="btn btn-primary">Create Account</button>}
            </form>
        </div>
    )
}

export default SignUp