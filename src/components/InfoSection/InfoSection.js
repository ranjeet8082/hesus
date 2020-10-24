import React from 'react';

import "./InfoSection.style.css";

export default function InfoSection() {
  return (
    <section className="info-section">
      <article className="welcome-card">
        <h2 className="welcome-msg">Wlecome <span className="username">Jack</span></h2>
        <p>We are always looking forward to meeting new talents! You are willing to become part of the adventure and support us in the development of our activity? Don't hesistate anymore and join us!</p>
      </article>
      <article className="about-card">
        <h2>About Us</h2>
        <p>Safegurading the environment has become a core concern in the development of large cities. <a href="#" className="view-more">View More</a></p>
      </article>
    </section>
  )
}
