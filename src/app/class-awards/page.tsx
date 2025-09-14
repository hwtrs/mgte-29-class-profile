import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./classawards.scss"

export default function ClassAwardsPage() {
  return (
    <ProfileLayout>
      <div className="classawards-container">
        
        {/* Top banner */}
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        {/* awards */}
        <section className="awards-section">
          <h2 className="section-title">What are Superlatives?</h2>
          <p className="section-subtitle">Who's mostly likely to be famous? Who almost missed an exam... MGTE have spoken and results are in!</p>
        </section>
        
        <img src="/awards/all-superlatives.png" alt="Superlatives" className="superlatives"/>

        {/* Buttons */}
        <div className="nav-buttons">
          <a href="/gallery" className="nav-btn gallery-btn">
            &larr; Gallery
          </a>
          <a href="/about" className="nav-btn about-btn">
            About &rarr;
          </a>
        </div>

      </div>
    </ProfileLayout>
  );
}
