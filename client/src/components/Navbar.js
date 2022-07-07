import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navi = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/logout", {
            email: email,
            password: password,
            }, {
            withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                navi("/devs/login");
            })
            .catch(err => {
                console.log(err);
            });
    };

    let navigationlink;
    if (window.location.pathname === '/devs/register' || window.location.pathname === '/orgs/register') {
        navigationlink = <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to={'/devs/login'}>Dev Login</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to={'/orgs/login'}>Org Login</Link>
            </li>
        </ul>
        } else if (window.location.pathname === '/devs/login' || window.location.pathname === '/orgs/login') {
        navigationlink = <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to={'/devs/register'}>Dev Register</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to={'/orgs/register'}>Org Register</Link>
            </li>
        </ul>
        } else {
        navigationlink = <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" onClick={(e) => logout(e)}>Logout</Link>
            </li>
    
        </ul>
    }    

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to={'/devs/register'}>DEVSONDECK</Link>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    {navigationlink}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;