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
                navi("/devs/login");
            })
            .catch(err => {
                console.log(err);
            });
    };

    let navigationlink;
    if (window.location.pathname === '/devs/register' || window.location.pathname === '/orgs/register' || window.location.pathname === '/devs/login' || window.location.pathname === '/orgs/login') {
        navigationlink = ''
        } else if(window.location.pathname === '/devs/dashboard' || window.location.pathname === '/devs/skills/language' || window.location.pathname === '/devs/skills/frameworks') {
        navigationlink = <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" onClick={(e) => logout(e)}>Logout</Link>
            </li>
    
        </ul>
    }    

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar navbar-dark bg-primary'>
                <Link className='navbar-brand' to={'/'}>DEVSONDECK</Link>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    {navigationlink}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;