import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { MdOndemandVideo, MdPeople, MdNotifications, MdMessage } from "react-icons/md";

export const links = [
    {
        name:'home',
        icon:<FaHome />
    }, 
    {
        name:'video',
        icon:<MdOndemandVideo />
    },
    {
        name:'people',
        icon:<MdPeople/>
    }
]

export const avatar =[
    {
        id:2,
        info:'notifications',
        icon:<MdNotifications />
    },
    {
        id:3,
        info:'messenger',
        icon:<MdMessage />
    }
]