import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Register = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        isOrg: false,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        password: '',
        confirmPassword: '',
    });
    
    const [errs, setErrs] = useState({});
        
    const onChange = (e) => {
            setState({
            ...state,
            [e.target.name]: e.target.value,
            });
    };
    
    const submitForm = (e) => {
        e.preventDefault();
        let navigateUrl = `/devs/skills/language`;
        let registerObj = {...state}
        if (window.location.pathname === '/orgs/register') {
            navigateUrl = `/orgs/dashboard`;
            registerObj.isOrg = true;
        }
        axios
            .post('http://localhost:8000/api/register', registerObj, {withCredentials: true})
        
            .then((response) => {
                console.log(response);
                if (response.data.errors) {
                setErrs(response.data.errors);
                } else {
                console.log(response.data._id);
                navigate(navigateUrl);
                }
            })
            .catch((err) => console.log(err));
    };


    let buttons;
    if(window.location.pathname === '/devs/register'){
        buttons = <Link to={'/devs/login'}><button className='btn btn-danger btn-sm mb-1'>Log in as a Developer</button></Link>
    } else {
        buttons = <Link to={'/orgs/login'}><button className='btn btn-danger btn-sm mb-1'>Log in as a Head Hunter</button></Link>
    }

    let userForm;
    let orgname = <div className="form-group">
        <label htmlFor="orgName">Org Name</label>
        <input type="text" className="form-control" id="orgName" placeholder="Enter Org Name" name="orgName" onChange={(e) => onChange(e)} required />
        </div>
        //---------------------
        if (window.location.pathname === '/devs/register') {
        userForm = <div className='w-50 mx-auto pt-2'>
            <h3 className='text-capitalize text-center'>Developer Sign up</h3>
            <form onSubmit={submitForm}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="firstName" onChange={(e) => onChange(e)} required />
                {errs.firstName ? (
                <span>{errs.firstName.message}</span>
                ) : null}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="address" className="form-control" id="address" placeholder="Enter Address" name="address" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="city" className="form-control" id="city" placeholder="Enter City" name="city" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="state" className="form-control" id="state" placeholder="Enter State" name="state" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="city" placeholder="Enter password" name="password" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" onChange={(e) => onChange(e)} required />
            </div>
            <br />
            <button type="submit" className="btn btn-success btn-sm mb-1 ">Register</button>
            &nbsp;
            {buttons}
            </form>
            <p className='text-center'>
            <Link to={`/orgs/register`}>Need to Sign up an Organisation?</Link>
            </p>
        </div>
        } else if (window.location.pathname === '/orgs/register') {
        userForm = <div className='w-50 mx-auto pt-2'>
            <h3 className='text-capitalize text-center'>Organisation Sign up</h3>
            <form onSubmit={submitForm}>
            {orgname}
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="firstName" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="address" className="form-control" id="address" placeholder="Enter Address" name="address" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="city" className="form-control" id="city" placeholder="Enter City" name="city" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="state" className="form-control" id="state" placeholder="Enter State" name="state" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="city" placeholder="Enter password" name="password" onChange={(e) => onChange(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" onChange={(e) => onChange(e)} required />
            </div>
            <br />
            <button type="submit" className="btn btn-success btn-sm mb-1">Register</button>
            &nbsp;
            {buttons}
            </form>
            <p className='text-center'>
            <Link to={`/devs/register`}>Need to Sign up as a Developer?</Link>
            </p>
        </div>
    }

    return (
        <div>
            <Navbar devLogin='Dev Login' orgLogin='Org Login' />
            {userForm}
        </div>
    )
}

export default Register;