import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/about',
            name: 'About'
        },
        {
            id: 3,
            link: '/announcement',
            name: 'Announcements'
        },
        {
            id: 4,
            link: '/gallery',
            name: 'Gallery'
        },
        {
            id: 5,
            link: '/donation',
            name: 'Donations'
        },
        {
            id: 6,
            link: '/contact',
            name: 'Contact'
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 bg-gray-100 text-gray-600 px-4 fixed">
        <div className="flex">
                <h1 className=" items-center text-4xl font-bold ml-2 hidden md:flex">Deaf Church Online</h1>
            </div>
            <div className="md:hidden mr-10">
                <h1 className="text-4xl font-bold flex md:hidden">Deaf Church</h1>
            </div>

            <ul className="hidden lg:flex">
                {links.map(({link, id, name}) => {
                    return(
                    <li 
                        key={id} 
                        className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                    >
                        <Link to={link}>{name}</Link>
                    </li>
                    )
                })}
            </ul>

            <button onClick={() => setNav(!nav)} className="cursor-pointer pl-2 pr-2 z-10 lg:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </button>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#202124] to-[#323639] text-[#f1f0ec]">
                    {links.map(({link, id, name}) => {
                        return(
                            <li 
                                key={id} 
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link to={link} onClick={()=> setNav(!nav)}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            )}
    </div>
  )
}

export default Navbar