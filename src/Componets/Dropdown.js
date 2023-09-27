import React from 'react'
import './Dropdown.css'
import Background from './Background/Background'
import ImageCard from './Image/ImageCard'
import Logodetails from './logodetails.js/Logodetails'
import Follow from './Follow/Follow'
import Signup from './Signup/Signup'
import Riview from './Rivews/Riview'
import Subscrib from './Subscrib/Subscrib'
import { NavLink } from 'react-router-dom'

export default function Dropdown() {
  return (
    <>
    <div className='mains'>
    <div className='main'>
    <h1 className='logo'>World  Nature   <span>Photography</span></h1>

    <ul>
    <li><a href="">Home</a></li>
    <li><a href=""><NavLink to= "/about">About</NavLink></a></li>
    
    <li><a href=""><NavLink to="/winners">Winners</NavLink></a>

    </li>
    <li><a href=""><NavLink to="/contact">Conatct</NavLink></a></li>
    </ul> 

   </div>
   <Background/>
   <ImageCard/>
   <Logodetails/>
<Follow/>
<Riview/>
<Subscrib/>
   </div>
 
   </>
  )
}
