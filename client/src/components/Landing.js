import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

const Landing = () => {

    const times = moment().format('LLL');

    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    Welcome!
                </div>
                <div className="card-body">
                    <h5 className="card-title">Welcome to Hire A Dev</h5>
                    <p className="card-text">WHERE DEVELOPER AND HEAD HUNTER MEET</p>
                    <Link to={'/devs/login'}><button className='btn btn-success'>Click Here to Start</button></Link>
                </div>
                <div className="card-footer text-muted">
                    {times}
                </div>
            </div>
        </>
    )
}

export default Landing;