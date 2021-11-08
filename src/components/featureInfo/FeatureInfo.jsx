import React from 'react';
import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeatureInfo() {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$4,225</span>
                    <span className="featureMoneyRate">-11.25 <ArrowDownward className="featureIcon negative" /></span>
                </div>
                <span className="feautureSub">Compared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sale</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,225</span>
                    <span className="featureMoneyRate">-1.25 <ArrowDownward className="featureIcon negative" /></span>
                </div>
                <span className="feautureSub">Compared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$1,225</span>
                    <span className="featureMoneyRate">+2.25 <ArrowUpward className="featureIcon" /></span>
                </div>
                <span className="feautureSub">Compared to last month</span>
            </div>
        </div>
    )
}
