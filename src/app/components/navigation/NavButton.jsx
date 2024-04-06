import React from 'react'
import {Home, User, Palette, Phone, Github, Linkedin,Twitter, NotebookText   } from "lucide-react"
import Link from "next/link"

const getIcon =(icon)=>{
  switch (icon){
    case "Home":
         return <Home className="w-full h-auto" strokeWidth={1.5}/>
    case "about":
          return <User className="w-full h-auto" strokeWidth={1.5}/>
    case "Projects":
         return <Palette className="w-full h-auto" strokeWidth={1.5}/>
    case "contact":
         return <Phone className="w-full h-auto" strokeWidth={1.5}/>
    case "github":
          return <Github className="w-full h-auto" strokeWidth={1.5}/>
    case "linkedin":
         return <Linkedin className="w-full h-auto" strokeWidth={1.5}/>
    case "twitter":
         return <Twitter className="w-full h-auto" strokeWidth={1.5}/> 
    case "resume":
         return <NotebookText className="w-full h-auto" strokeWidth={1.5}/>     
         
    default: 
         return <Home className="w-full h-auto" strokeWidth={1.5}/>

  }
}

const NavButton = ({x,y,label,link,icon,newTab}) => {

  return (
    <div className='absolute cursor-pointer z-50' style={{transform : `translate(${x},${y})`}}>
        <Link aria-label={link} target={newTab ?"_blank":"_self" } name={label} href={label} className='text-forground rounded-full items-center flex justify-center'>
            <span className='relative w-14 h-14 p-4'>
              {getIcon(icon)}
            </span>
        </Link>
    </div>
  )
}

export default NavButton;
