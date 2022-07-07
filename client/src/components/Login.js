import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        console.log('Login!');
        axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
        },
        {
            withCredentials: true
        })
        .then((res) => {
            console.log('Login successful!');
            console.log(res.data);
            if (window.location.pathname === '/devs/login') {
            navigate(`/devs/dashboard`);
            } else if (window.location.pathname === '/orgs/login') {
            navigate(`/orgs/dashboard`);
            }
        })
        .catch(err => {
            console.log(err);
            setErrors(err.response.data.msg);
        });
    };

    let welcomeUser;
    if (window.location.pathname === '/devs/login') {
        welcomeUser = <div>
            <h3 className='text-capitalize text-center'>Welcome Back, Developer!</h3>
            <h5 className='text-capitalize text-center'>Let's Connect you to a Job!</h5>
        </div>
        } else if (window.location.pathname === '/orgs/login') {
        welcomeUser = <div>
            <h3 className='text-capitalize text-center'>Welcome Back! Head Hunter</h3>
            <h5 className='text-capitalize text-center'>Let's Find you some candidates!</h5>
        </div>
    }

    return (
        <div>
            <Navbar devRegister='Dev Registration' orgRegister='Org Registration' />
            <div className='w-50 mx-auto pt-2'>
                {welcomeUser}
                <form onSubmit={login} className='needs-validation' noValidate>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" autoComplete='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success btn-sm mb-1'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;