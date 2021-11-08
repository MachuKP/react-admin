import { useState } from 'react';
import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [select, setSelect] = useState("");

    const handleCLike = (value) => {
        setSelect(value);
        console.log(select);
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarItem" onClick={() => handleCLike("home")}>
                                <LineStyle className="sidebarIcon" /> 
                                Home
                            </li>
                        </Link>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon" /> 
                            sale
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" /> 
                            Analytics
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarItem">
                                <PermIdentity className="sidebarIcon" /> 
                                User
                            </li>
                        </Link>
                        <Link to="/product" className="link">
                            <li className="sidebarItem">
                                <Storefront className="sidebarIcon" /> 
                                Product
                            </li>
                        </Link>
                        <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon" /> 
                            Transaction
                        </li>
                        <li className="sidebarItem">
                            <BarChart className="sidebarIcon" /> 
                            Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <MailOutline className="sidebarIcon" /> 
                            Mail
                        </li>
                        <li className="sidebarItem">
                            <DynamicFeed className="sidebarIcon" /> 
                            Product
                        </li>
                        <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon" /> 
                            Feedback
                        </li>
                        <li className="sidebarItem">
                            <ChatBubbleOutline className="sidebarIcon" /> 
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <WorkOutline className="sidebarIcon" /> 
                            Manage
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" /> 
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <Report className="sidebarIcon" /> 
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
