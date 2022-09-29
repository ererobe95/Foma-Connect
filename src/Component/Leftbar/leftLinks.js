import React from "react";
import { FaHome } from "react-icons/fa";
import { MdApps, MdCamera, MdCollections, MdList, MdLogout, MdMessage, MdPerson, MdPlayCircle, MdSettings, MdStore } from "react-icons/md";


export const leftBar =[
    {
        text:'Homepage',
        icon:<FaHome/>
    },
    {
        text:'Friends',
        icon: <MdPerson/>
    },
    {
        text:'Lists',
        icon: <MdList/>
    },
    {
        text:'Camera',
        icon: <MdCamera/>
    },
    {
        text:'Videos',
        icon: <MdPlayCircle/>
    },
    {
        text:'Apps',
        icon: <MdApps/>
    },
    {
        text:'Collections',
        icon: <MdCollections/>
    },
    {
        text:'Market Place',
        icon: <MdStore/>
    },
    {
        text:'Settings',
        icon: <MdSettings/>
    },
    {
        text:'Logout',
        icon: <MdLogout/>
    },
]
