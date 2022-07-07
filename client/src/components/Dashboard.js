import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Dashboard = (props) => {

    const {id} = useParams();
    const [alldevs, setAlldevs] = useState([]);
    const [position, setposition] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/position/${props.posId}`, {
                withCredentials: true,
            })
            .then((res) => {
                console.log('res.data');
                console.log(res);
                setposition(res.data);
                console.log(position);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/availableDevs/${id}`, {
                withCredentials: true,
            })
            .then((res) => {
                setAlldevs(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>

            <div className='text-center border border-dark'>
            {position.name}
            </div>
            <h5 className='m-1'>Available Devs</h5>
            <div className='myscroll'>
            {/* {alldevs.map((element, index) => (
                <div className='border border-dark p-2'>
                <div>
                    {element.name}
                </div>
                <div>
                    {element.skills}
                </div>
                <div>
                    {element.percentMatch}
                </div>
                </div>
            ))} */}
            <span>PLACE HOLDER FOR AVAILABLE DEVS</span>
            </div>
        </div>
    )
}

export default Dashboard;