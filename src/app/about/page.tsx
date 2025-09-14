import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./about.scss"

export default function AboutPage() {
  return (
    <ProfileLayout>
        <div className="about-container">

          {/* Top banner */}
          <section className="background">
            <span className="bg-banner" />
            <span className="bg-lockers" />
            <span className="bg-title" />
          </section>

          {/* Who are we */}
          <section className="about-section">
            <h2 className="section-title">Who Are We?</h2>
            <p className="section-subtitle">A snapshot of MGTE '29 and the individuals that made this page possible!</p>
          </section>
            <span className="post-1a-final" />
          <section className="about-section">
            <p className="section-text"><strong>September 2024 marked the start of something new. </strong>The Management Engineering Class of 2029 walked onto campus with big dreams, complicated schedules, and one shared question floating through our minds:</p>
            <span className="whats-mgte" />
            <p className="section-text">
              Most of us tried to piece together an answer on the fly, something like “Problem-solving... data... some stats... maybe software?”
              Let's be real, we were winging it. But through the journey of late-night study sessions, co-op terms that pushed us outside our comfort zones, 
              and classes that stretched our brains in every direction, we finally started to figure it out. Not just the textbook definition, but what it means to us. 
            </p>
            <p className="section-text">
              We had chaotic study nights, group chats that saved our GPAs, and more than a few “is this due tonight?!” moments. 
              Somewhere along the way, we began seeing the world differently, not as a collection of random problems, 
              but as complex systems waiting to be understood, optimized, and redesigned.
            </p>
            <p className="section-text">
              So, who are we? We're thinkers, builders, spreadsheet wizards, and creative minds. We come from all kinds of backgrounds, with interests that span business, 
              tech, design, data, and everything in between. But what connects us is our shared drive to make things better, smarter, faster, more sustainable, and more human.
            </p>
            <p className="section-text">
              We're building more than just skills. We're building friendships, memories, and the foundations of our futures, one project, one all-nighter, 
              and one iced coffee at a time. 
            </p>
            <p className="section-text">
              We're not just classmates. We're a community.<br />
              We're MGTE 2029, and we're just getting started.
            </p>
          </section>
          <span className="post-1b-final" />

        {/* what is the class profile */}
        <section className="about-section">
          <h2 className="section-title-2">What is MGTE 29 Class Profile?</h2>
          <p className="section-text">
              This website is our way of bringing you along on this wild journey with us. It is a letter 
              to both our past and future selves, a place to document this special chapter in our lives so we 
              can always look back on the memories that shaped us.
          </p>
          <p className="section-text">
            Inside, you will find glimpses of our day-to-day: the friendships, our academics, the lifestyle we 
            have built together, and yes, even the chaotic but incredibly rewarding co-op hunt. 
            We have captured who we were before Management, who we are during it, and who we are becoming, so our 
            future selves can look back and see just how far we have come.
          </p>
          <p className="section-text">
            All of this came together thanks to a dedicated team of 11 individuals who worked tirelessly to bring 
            this project to life, from brainstorming and design to data collection, development, and everything 
            in between. This is more than just a website. It is our story and we are excited to share it with you!
          </p>
        </section>
        <img src="/about/bulletin.png" alt="Bulletin Board" className="the-team"/>

        {/* Buttons */}
        <div className="nav-buttons">
          <a href="/class-awards" className="nav-btn awards-btn">
            &larr; Awards
          </a>
        </div>

      </div>

    </ProfileLayout>
  );
}
