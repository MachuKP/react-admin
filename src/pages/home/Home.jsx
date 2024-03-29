import React from 'react';
import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import "./home.css";
import { userData } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={ userData } title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
