import React from 'react'
import './sidebar.scss'
import {LineStyle, Timeline, TrendingUp, PermIdentity, AttachMoney, EqualizerOutlined, MailOutline, Feedback, ChatBubbleOutline, Report, CallToAction} from '@material-ui/icons'
import { Link } from '@material-ui/core'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItems">
                            <PermIdentity/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItems">
                            <Timeline/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItems">
                            <AttachMoney/>
                            Transactions
                        </li>
                        <li className="sidebarListItems">
                            <EqualizerOutlined/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <MailOutline/>
                            Mail
                        </li>
                        <li className="sidebarListItems">
                            <Feedback/>
                            Feedback
                        </li>
                        <li className="sidebarListItems">
                            <ChatBubbleOutline/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <CallToAction/>
                            Manage
                        </li>
                        <li className="sidebarListItems">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItems">
                            <Report/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
