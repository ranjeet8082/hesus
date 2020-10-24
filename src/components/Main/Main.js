import React from 'react';
import InfoSection from '../InfoSection/InfoSection';
import NewsFeed from '../NewsFeed/NewsFeed';
import Registration from '../Registration/Registration';

import "./Main.style.css";

export default function Main() {
    return (
        <div className="main-area">
            <InfoSection />
            <NewsFeed />
            <Registration />
        </div>
    )
}
