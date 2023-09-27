import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='headContainer'>
      <div className="head"><NavLink to="/" className="head">HOME</NavLink></div>
      <div className="head"><NavLink to="/about " className="head">ABOUT</NavLink></div>
      <div className="head"><NavLink to="/winners" className="head">WINNERS</NavLink></div>
      <div className="head"><NavLink to="/contact" className="head">CONTACT</NavLink></div>
    </div>
  )
}
