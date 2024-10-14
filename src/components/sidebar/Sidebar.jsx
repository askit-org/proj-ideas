import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import gojo from '../../assets/images/gojo.png'

const Sidebar = () => {
    return (
        <div className='sidebar-base'>
            <div>
                <img height={'100px'} width={'100px'} src={gojo} alt="logo" />
            </div>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/explore'}>Explore</Link>
                </li>
                <li>
                    <Link to={'/messages'}>Messages</Link>
                </li>
                <li>
                    <Link to={'/saved'}>Saved</Link>
                </li>
                <li>
                    <Link to={'/jobs'}>jobs</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
            </ul>
            <div>
                Profile sectiom
            </div>
        </div>
    )
}

export default Sidebar