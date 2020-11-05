import React from 'react'
import Body from '../../components/Body'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import './styles.css'

function Player ({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player
