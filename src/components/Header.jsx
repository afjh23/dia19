import React from 'react'

import logo from '../assets/logo.svg'
import iconCart from '../assets/icon-cart.svg'
import imageAvatar from '../assets/image-avatar.png'
import { MegaMenu } from 'primereact/megamenu';
import { TabView, TabPanel } from 'primereact/tabview';
export default function Header() {
    const items =
       [
        { label: 'Collections'  },
        { label: 'Men'},
        { label: 'Women'},
        { label: 'About'},
        { label: 'Contact'},
      ]
    

            
       
    
      const start = <img alt="logo" src={logo} height="25"  width="150" className="mr-2"></img>
     
      const end =[
        <img alt="logo" src={iconCart} height="20" className="mr-2"></img>,
        <img alt="logo" src={imageAvatar} height="40" className="mr-2"></img>
      ]
      
      
  
 
    return (
    
    <MegaMenu model={items} start={start} end={end} />
  )
}
