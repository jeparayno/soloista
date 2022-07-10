import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logout from './Logout';



const PositionNew = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState([]);
    const [errs, setErrs] = useState({});
    const [state, setState] = useState({
        name: '',
        description: '',
        skills: [],
        org_id: ''
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedIn", { withCredentials: true })
            .then((res) => {
                // console.log(res.data);
                setUser(res.data)
                setLoaded(true);
            })
            .catch(err => console.log('something is errored out' + err))
    }, [])

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/newposition', state, {
                withCredentials: true
            })
            .then((res) => {
                navigate(`/orgs/dashboard`);
            })
            .catch((err) => console.log(err));
    };

    return (
            <div>
                <Logout />
            <div className='w-75 mx-auto pt-2 border border-dark p-2'>
                <h1 className='bg-primary text-center'>Add A Poition</h1>
            <div className='w-50 mx-auto pt-2'>
            
            <form onSubmit={submitForm}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={(e) => onChange(e)} required />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Enter Description" name="description" onChange={(e) => onChange(e)} required />
                </div>
                <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <input type="text" className="form-control" id="skills" placeholder="Enter Skills" name="skills" onChange={(e) => onChange(e)} required/>
                </div>
                <div className="form-group">
                <label htmlFor="org_id">Unique Id</label>
                <input type="text" className="form-control" id="org_id" name="org_id" onChange={(e) => onChange(e)} required/>
                <p>Copy this id: &nbsp;  {user._id}</p>
                </div>
                    <button type="submit" className="btn btn-primary btn-sm mb-2 ">Add Poition</button>
            </form>
            </div>
            </div>
            </div>
        );
    };
    
    export default PositionNew;