import React from 'react';
import Link from 'next/link';
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
          <p className="section-subtitle">Who&apos;s mostly likely to be famous? Who almost missed an exam... MGTE have spoken and results are in!</p>
        </section>
        
        <img src="/awards/all-superlatives.png" alt="Superlatives" className="superlatives"/>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link href="/gallery" className="nav-btn nav-btn--blue">
            &larr; Gallery
          </Link>
          <Link href="/about" className="nav-btn nav-btn--purple">
            About &rarr;
          </Link>
        </div>

      </div>
    </ProfileLayout>
  );
}
