import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import gojo from '../../assets/images/gojo.png'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='sidebar-base'>
            <div className='profile-section' onClick={() => navigate('/profile')}>
                <div className='side-bar-logo'>
                    <img src={gojo} alt="logo" />
                </div>
                <div>
                    <h4>name</h4>
                    <h6>about descrption title or heading</h6>
                </div>
            </div>
            <div className='side-bar-tabs'>
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
            </div>
            <div>
                <button>Create</button>
            </div>
        </div>
    )
}

export default Sidebar