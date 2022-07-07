import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SkillsUpdate from './SkillsUpdate';


const Logout = () => {

  const navigate = useNavigate();
  
  const logout = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/logout", { 
      }, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/devs/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <button className='btn btn-danger' onClick={(e) => logout(e)}>Logout</button> &nbsp;
      <Link to="/devs/skills/language"><button className='btn btn-success'>Skills Create</button></Link>
    </div>
  )
}

export default Logout;