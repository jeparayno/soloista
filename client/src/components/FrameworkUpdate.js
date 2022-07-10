import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Logout from './Logout';

const FrameworkUpdate = () => {

    const [dbLang, setdbLang] = useState([]);
    const [language, setLanguage] = useState([]);
    const navigate = useNavigate();

    const onClick = (name, icon) => {
        setdbLang([...dbLang, name])
        setLanguage([
            ...language,
            {
            name: name,
            icon: icon
            }
        ]);
    };

    const submitForm = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/dev`, {dbLang}, {
            withCredentials: true
        })
        .then((res) => {
            navigate(`/devs/dashboard`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Logout />
        <div className=' container w-75 mx-auto pt-2 border border-dark'>

            <form onSubmit={submitForm}>
            <div className='bg-primary row border border-dark'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 '>
                <h1 className='text-center text-capitalize'>Add Your Skills</h1>
                </div>
                <div className="progress col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-warning m-3 p-2">
                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className='w-100 mx-auto pt-2'>
                <div className='container'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 border border-dark'>
                    <h5 className="p-0 text-capitalize mb-2">Pick Your Top 5 Languages</h5>
                    <div className='border border-dark myscroll'>
                        <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'blue' }} className="fab fa-react fa-3x" onClick={() => onClick('react', 'fa-react')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'blue' }} className="fab fa-html5 fa-3x" onClick={() => onClick('html5', 'fa-html5')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'orange' }} className="fab fa-css3-alt fa-3x" onClick={() => onClick('css3-alt', 'fa-css3-alt')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'green' }} className="fab fa-python fa-3x" onClick={() => onClick('python', 'fa-python')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'green' }} className="fab fa-node-js fa-3x" onClick={() => onClick('node-js', 'fa-node-js')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'blue' }} className="fab fa-java fa-3x" onClick={() => onClick('java', 'fa-java')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'pink' }} className="fab fa-google-plus fa-3x" onClick={() => onClick('google-plus', 'fa-google-plus')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'purple' }} className="fab fa-npm fa-3x" onClick={() => onClick('npm', 'fa-npm')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'pink' }} className="fab fa-bootstrap fa-3x" onClick={() => onClick('bootstrap', 'fa-bootstrap')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'orange' }} className="fab fa-mdb fa-3x" onClick={() => onClick('mdb', 'fa-mdb')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'green' }} className="fab fa-js fa-3x" onClick={() => onClick('js', 'fa-js')} ></i>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>
                            <i style={{ color: 'blue' }} className="fab fa-react fa-3x" onClick={() => onClick('react', 'fa-react')} ></i>
                        </div>

                        </div>

                    </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 border border-dark'>

                    <div className='w-100 h-50 border border-dark'>
                        {
                        language.map((element, index) => (
                            <i key={index} style={{ color: 'blue' }} className={`fab ${element.icon} fa-3x`}></i>
                        ))
                        }
                    </div>
                    <p>
                        Hard work is the most important key to success. Without it business success is nearly impossible.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm m-2 ">Complete Profile</button>

            </form>

        </div>
        </div>
    )
}

export default FrameworkUpdate;