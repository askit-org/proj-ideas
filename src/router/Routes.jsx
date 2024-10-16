import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NoPage from '../pages/noPage/NoPage'
import Profile from '../pages/profile/Profile'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes