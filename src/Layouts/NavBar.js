import {
    HelpCircle,
    PieChart,
    Settings,
    User
} from "react-feather";
import Notifications from "../Components/Notifications";
import Messages from "../Components/Messages";
import avatar from "../img/avatars/avatar.jpg";
import React from "react";
import { useGlobal } from "../context/GlobalContext";
// images

import avatarTwo from '../img/avatars/avatar-2.jpg';
import avatarThree from '../img/avatars/avatar-3.jpg';
import avatarFour from '../img/avatars/avatar-4.jpg';
import avatarFive from '../img/avatars/avatar-5.jpg';

// Notifications
const notificationList = [
    {
        icon:'AlertCircle',
        heading:"Update completed",
        description:"Restart server 12 to complete the update.",
        time: "30m ago"
    },
    {
        icon:"Bell",
        heading:"Lorem ipsum",
        description:"Aliquam ex eros, imperdiet vulputate hendrerit et.",
        time: "2h ago"
    },
    {
        icon:"AlertCircle",
        heading:"Update completed",
        description:"Restart server 12 to complete the update.",
        time: "30m ago"
    }
];

// messages

const MessagesList = [
    {
        image:avatarTwo,
        username:"Vanessa Tucker",
        message:"Nam pretium turpis et arcu. Duis arcu tortor.",
        time: "2h ago"
    },
    {
        image:avatarThree,
        username:"Vanessa Tucker",
        message:"Nam pretium turpis et arcu. Duis arcu tortor.",
        time: "3h ago"
    },
    {
        image:avatarFour,
        username:"Vanessa Tucker",
        message:"Nam pretium turpis et arcu. Duis arcu tortor.",
        time: "2h ago"
    }
]

function NavBar(Props){
    const { isSideBarOpen, setIsSideBarOpen } = useGlobal();
    // console.log(isSideBarOpen);
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle"
               onClick={()=>{ setIsSideBarOpen(!isSideBarOpen) }}
            >
                <i className="hamburger align-self-center"></i>
            </a>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <Notifications Notifications={notificationList}/>
                    <Messages  Messages={MessagesList}/>
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                            <Settings className="align-middle" />
                        </a>

                        <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                            <img src={avatar} className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="pages-profile.html"><User className="align-middle me-1" /> Profile</a>
                            <a className="dropdown-item" href="#"><PieChart className="align-middle me-1" /> Analytics</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/"><Settings className="align-middle me-1" /> Settings & Privacy</a>
                            <a className="dropdown-item" href="#"><HelpCircle className="align-middle me-1" /> Help Center</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;