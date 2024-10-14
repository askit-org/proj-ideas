import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../components/about/about'
import Contact from '../components/contact/Contact'
import NoPage from '../components/noPage/NoPage'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes