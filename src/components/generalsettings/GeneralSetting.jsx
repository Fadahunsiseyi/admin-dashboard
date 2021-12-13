import React from 'react';
import { BsQuestionCircle } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import HelpContact from './HelpContact'
import './general.scss'


function GeneralSetting() {
  return (
    <div className="general-setting">
       <div className="general-setting-wrapper">
            <ul className="list-items">
                <li className="general-list-item settings">
                  <MdSettings className="general-list-item-icon" />
                    <span>Settings</span>
                </li>
                <li className="general-list-item help">
                  <BsQuestionCircle className="general-list-item-icon"/>
                   <span>Help</span>
                </li>
                <li className="general-list-item log-out">
                   <BiLogOutCircle className="general-list-item-icon"/>
                    <span>Logout</span>
                </li>
            </ul>
            <HelpContact/>
       </div>
    </div>
  );
}

export default GeneralSetting;
