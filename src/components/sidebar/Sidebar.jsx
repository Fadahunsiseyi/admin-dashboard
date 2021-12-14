import React, { useState } from 'react'
import './sidebar.scss'
// import {AcUnitIcon} from '@mui/icons-material/AcUnit';
import { Dashboard} from '@material-ui/icons';
import { FaNotesMedical, FaUserMd, FaSearchengin, FaStethoscope } from "react-icons/fa";
import GeneralSetting from '../generalsettings/GeneralSetting';
import { Link} from "react-router-dom";



export default function Sidebar() {
    const [open, setOpen] = useState(0);
    console.log(setOpen)
    console.log(open)

    const handleClick = () => {
      setOpen(!open);
    };
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarHeader">
                    <Link to="/" className="links">
                    <h4 className="sidebarHeaderTitle">Health {open} Backbone</h4>
                    </Link>
                </div>
                <div className="sidebarUserInfoHeader">
                   <div className="sidebarUserInfo">
                       <h5>Femi Olapegba</h5>
                       <small>Lagos, Nigeria</small>
                   </div>
                </div>
                <div>
                <ul className="sidebarMainMenu">
                       <Link to="users" className="links" onClick={() => setOpen( open + 1)}  >
                        <li className="dashboardInfo">
                            <Dashboard className="dashboardInfoIcon"/>
                            <p className="dashboardInfoTitle"> Dashboard</p>
                        </li>
                        </Link>
                        <Link to="/users" className="links" onClick={() => setOpen( open + 5)}>
                        <li className="dashboardInfo">
                            <FaNotesMedical className="dashboardInfoIcon"/>
                            <p className="dashboardInfoTitle">Patients</p>
                        </li>
                        </Link>
                        <Link to="/products" className="links">
                        <li className="dashboardInfo">
                            <FaUserMd className="dashboardInfoIcon"/>
                            <p className="dashboardInfoTitle">Practitioner Portal</p>
                        </li>
                        </Link>
                        <Link to="/users" className="links">
                        <li className="dashboardInfo">
                            <FaSearchengin className="dashboardInfoIcon"/>
                            <p className="dashboardInfoTitle"> Personal Demographic Services</p>
                        </li>
                        </Link>
                        <Link to="/products" className="links">
                        <li className="dashboardInfo">
                            <FaStethoscope className="dashboardInfoIcon"/>
                            <p className="dashboardInfoTitle"> ISP</p>
                        </li>
                        </Link>
                </ul>
                </div>
                <GeneralSetting/>
           </div>
        </div>
    )
}
