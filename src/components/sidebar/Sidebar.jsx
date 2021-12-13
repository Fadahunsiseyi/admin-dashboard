import React, { useState } from 'react'
import './sidebar.scss'
// import {AcUnitIcon} from '@mui/icons-material/AcUnit';
import { AcUnit, AcUnitOutlined, Dashboard} from '@material-ui/icons';
import { FaNotesMedical, FaUserMd, FaSearchengin, FaStethoscope } from "react-icons/fa";
import GeneralSetting from '../generalsettings/GeneralSetting';


export default function Sidebar() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarHeader">
                    <h4 className="sidebarHeaderTitle">Health Backbone</h4>
                </div>
                <div className="sidebarUserInfoHeader">
                   <div className="sidebarUserInfo">
                       <h5>Femi Olapegba</h5>
                       <small>Lagos, Nigeria</small>
                   </div>
                </div>
                <div className="sidebarMainMenu">
                        <div className="dashboardInfo">
                            <div className="dashboardInfoIcon">
                            <Dashboard/>
                            </div>
                            <p className="dashboardInfoTitle"> Dashboard</p>
                        </div>
                        <div className="dashboardInfo">
                            <div className="dashboardInfoIcon">
                            <FaNotesMedical/>
                            </div>
                            <p className="dashboardInfoTitle">Patients</p>
                        </div>
                        <div className="dashboardInfo">
                            <div className="dashboardInfoIcon">
                            <FaUserMd/>
                            </div>
                            <p className="dashboardInfoTitle">Practitioner Portal</p>
                        </div>
                        <div className="dashboardInfo">
                            <div className="dashboardInfoIcon">
                            <FaSearchengin/>
                            </div>
                            <p className="dashboardInfoTitle"> Personal Demographic Services</p>
                        </div>
                        <div className="dashboardInfo">
                            <div className="dashboardInfoIcon">
                            <FaStethoscope/>
                            </div>
                            <p className="dashboardInfoTitle"> ISP</p>
                        </div>
                </div>
                <GeneralSetting/>
           </div>
        </div>
    )
}
