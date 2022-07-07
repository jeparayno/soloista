import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Logout from './Logout';
import Navbar from './Navbar';


const DevDashboard = () => {

    const [allpositions, setAllpositions] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/position', {
                withCredentials: true
            })
            .then((res) => {

                setAllpositions(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {/* <Navbar /> */}
            <Logout />
            <div className='w-25 mx-auto pt-2'>
                <h5 className='text-capitalize text-decoration-underline'>Positions To Fill</h5>
                {allpositions.map((element, index) => (
                    <div>
                    <div>
                        {element.name}
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary text-capitalize w-50 mx-auto m-2 p-0">Apply</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DevDashboard;