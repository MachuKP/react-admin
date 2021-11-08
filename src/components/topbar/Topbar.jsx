import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ADMIN APP</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <Settings />
                    </div>
                    <img src="https://picsum.photos/200/300" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
