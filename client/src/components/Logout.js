import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Logout = () => {

  const navigate = useNavigate();
  
  const logout = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/logout", { 
      }, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        navigate("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  let navss;
  if(window.location.pathname === '/devs/dashboard' || window.location.pathname === '/devs/skills/frameworks'  || window.location.pathname === '/devs/skills/frameworks'  || window.location.pathname === '/devs/skills/language'){
    navss = <Link to={'/devs/dashboard'} className="navbar-brand">DEVELOPER</Link>
  } else {
    navss = <Link to={'/orgs/dashboard'} className="navbar-brand">HEAD HUNTER</Link>
  }

  let navsstwo;
  if(window.location.pathname === '/devs/dashboard'){
    navsstwo = <Link to="/devs/skills/language"><button className='btn btn-success'>Skills Create</button></Link>
  } else {
    navsstwo = ""
  }

  return (
    // <div>
    //   <button className='btn btn-danger' onClick={(e) => logout(e)}>Logout</button> &nbsp;
    //   <Link to="/devs/skills/language"><button className='btn btn-success'>Skills Create</button></Link>
    // </div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <div class="container-fluid">
        {navss}
        <form class="d-flex" role="search">
          {navsstwo} &nbsp;
          <button className='btn btn-danger' onClick={(e) => logout(e)}>Logout</button>
        </form>
      </div>
    </nav>
  )
}

export default Logout;