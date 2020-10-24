import React from 'react';

import "./News.style.css";

export default function News({ newsText, date, reporter, boxShadowColor }) {
    let newsFeedBoxStyle = {
        boxShadow: `0 -7px ${boxShadowColor}`
    }
    return (
        <div className="news-feed-box" style={newsFeedBoxStyle}>
            <div className="news-feed-img"></div>
            <div className="news-feed-info">
                <div className="news-feed-text">{newsText}</div>
                <div className="seperator"></div>
                <div className="news-feed-meta">
                    <span className="news-feed-date">{date}</span>
                    <span className="news-feed-reporter">{reporter}</span>
                </div>
            </div>
        </div>
    )
}
