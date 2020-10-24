import React from 'react';
import News from './News/News'

import "./NewsFeed.style.css";

export default function NewsFeed() {
  return (
    <section className="news-area-area">
      <h2 className="section-heading">NewsFeed</h2>
      <div className="news-area">
        <News newsText="CENTRALISE" date="Oct 27, 2019" reporter="Jack" boxShadowColor={'#2e5496'} />
        <News newsText="OPTIMISE" date="Oct 22, 2019" reporter="Benjamin" boxShadowColor={'#c45911'} />
        <News newsText="TRACK" date="Oct 20, 2019" reporter="Vincent" boxShadowColor={'#8ea9dc'} />
      </div>
    </section>
  )
}
