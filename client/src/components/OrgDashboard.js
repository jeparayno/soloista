import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logout from './Logout';


const OrgDashboard = () => {
    
    const [alldevs, setAlldevs] = useState([]);
    const [allpositions, setAllpositions] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/dev', {
                withCredentials: true,
            })
            .then((res) => {
                setAlldevs(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);
    
    
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/position', {
                withCredentials: true,
            })
            .then((res) => {
                setAllpositions(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Logout />
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                    <button type="button" className="btn btn-primary btn-block text-capitalize mb-2"><Link className="text-white" to={`/orgs/jobs/new`}>List a new position</Link></button>
                        <div className='border border-dark'>
                            <h5 className='text-capitalize m-2'>Positions To Fill</h5>
                            {allpositions.map((element, index) => (
                            <div key={index} className='m-2'>
                                <Link className='text-decoration-underline' to={`/orgs/jobs/${element._id}`}>{element.name}</Link>
                            </div>
                            ))}
                            <span></span>
                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 border border-dark'>
                    <h5>Available Devs</h5>
                        <div className='myscroll'>
                        {alldevs.map((element, index) => (
                            <div className='border border-dark p-2' key={index}>
                            <div>
                                {element.firstName} {element.lastName}
                            </div>
                            <div>
                                {element.language} 
                            </div>
                            <div>
                                {element.bio}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default OrgDashboard;