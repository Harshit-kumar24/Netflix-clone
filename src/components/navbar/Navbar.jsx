import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ArrowDropDown } from '@mui/icons-material';

function Navbar() {
    const [isScrolled,setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return ()=> (window.onscroll === null);
    }
  return (
    <div className={isScrolled?"navbar scrolled": "navbar"}>
        <div className="container">
            <div className="left">
                <img src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <span  id='1'>Home</span>
            <span id='2'>Series</span>
            <span id='3'>Movies</span>
            <span id='4'>New & popular</span>
            <span id='5'>My List</span>
            </div>
            <div className="right">
                    <SearchIcon  className='icon'/>
                    <span>KID</span>
                    <NotificationsNoneIcon className='icon'/>
                    <img src="https://images.moneycontrol.com/static-mcnews/2022/08/Andrew-tate-770x435.jpg?impolicy=website&width=770&height=431" alt="profile-img" />
                    <div className="profile">
                    <ArrowDropDown className='icon dropDown'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
