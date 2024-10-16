import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar'
import './WebLayout.css'
import ExploreSidebar from '../components/explore-sidebar/ExploreSidebar'

const WebLayout = ({ children }) => {
  return (
    <div className='web-layout-base' style={{display : 'flex', justifyContent : 'space-evenly', alignItems : 'center'}}>
      <div className='side-bar'>
        <Sidebar />
      </div>
      <div className='feed'>
        {children}
      </div>
      <div className='explore'>
        <ExploreSidebar />
      </div>
    </div>
  )
}

export default WebLayout