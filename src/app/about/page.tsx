import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import TeamMember from '../../components/cards/TeamMember';
import "./about.scss"

// Positions anchored to overlay banner Y positions (measured at render time).
// Banner tops: PM=2.5%, Designers=19.9%, Devs=37.9%, Data=55.6%, Outreach=71.4%
// Each row starts ~3% below its banner top (just below the banner ribbon).
// Ally PM image (366x601) is larger than others (252x386) — scaled down in designer row.
const teamMembers = [
  // Row 1 - Project Manager (Ally large, centered)
  { name: 'Ally Hao', image: '/about/team/ally.png', linkedinUrl: 'https://www.linkedin.com/in/ally-hao/', rotation: -2, style: { left: '35.6%', top: '3.4%', width: '28.8%' } },
  // Row 2 - Designers (evenly spaced, Ally width adjusted for equal height)
  { name: 'Ulyana Drahun', image: '/about/team/ulyana.png', linkedinUrl: 'https://www.linkedin.com/in/ulyana-drahun/', rotation: 3, style: { left: '6.7%', top: '25.2%', width: '19.8%' } },
  { name: 'Dhanvi Pandya', image: '/about/team/dhanvi.png', linkedinUrl: 'https://www.linkedin.com/in/dhanvipandya/', rotation: -2, style: { left: '29%', top: '25.2%', width: '19.8%' } },
  { name: 'Gurman', image: '/about/team/gurman.png', rotation: 0, style: { left: '51.3%', top: '25.2%', width: '19.8%' } },
  { name: 'Ally Hao', image: '/about/team/ally2.png', linkedinUrl: 'https://www.linkedin.com/in/ally-hao/', rotation: 2, style: { left: '73.5%', top: '25.1%', width: '19.8%' } },
  // Row 3 - Developers
  { name: 'Omar Anwar', image: '/about/team/anwar.png', linkedinUrl: 'https://www.linkedin.com/in/omar-anwar19/', rotation: -3, style: { left: '6.7%', top: '41%', width: '19.8%' } },
  { name: 'Dawang Zhang', image: '/about/team/dawang.png', linkedinUrl: 'https://www.linkedin.com/in/dawang-zhang', rotation: 2, style: { left: '29%', top: '41%', width: '19.8%' } },
  { name: 'Henry Waters', image: '/about/team/henry.png', linkedinUrl: 'https://www.linkedin.com/in/henry-waters-a982a2326/', rotation: -1, style: { left: '51.3%', top: '41%', width: '19.8%' } },
  { name: 'Kaelyn Pereira', image: '/about/team/kaelyn.png', linkedinUrl: 'https://www.linkedin.com/in/kaelyn-pereira/', rotation: 3, style: { left: '73.5%', top: '41%', width: '19.8%' } },
  // Row 4 - Data Analysis
  { name: 'Maria Sacenas', image: '/about/team/maria.png', linkedinUrl: 'https://www.linkedin.com/in/msacenas/', rotation: 2, style: { left: '6.7%', top: '58.5%', width: '19.8%' } },
  { name: 'Halayna Manhas', image: '/about/team/halayna.png', linkedinUrl: 'https://www.linkedin.com/in/halayna-kaur-manhas/', rotation: -3, style: { left: '29%', top: '58.5%', width: '19.8%' } },
  { name: 'Prakash Kumar', image: '/about/team/prakash.png', linkedinUrl: 'https://www.linkedin.com/in/prakashkumar6/', rotation: 1, style: { left: '51.3%', top: '58.5%', width: '19.8%' } },
  { name: 'Vivian Yang', image: '/about/team/vivian.png', linkedinUrl: 'https://www.linkedin.com/in/vivian-yyang1/', rotation: -2, style: { left: '73.5%', top: '58.5%', width: '19.8%' } },
  // Row 5 - Outreach (2 people, centered)
  { name: 'Prakash Kumar', image: '/about/team/prakash.png', linkedinUrl: 'https://www.linkedin.com/in/prakashkumar6/', rotation: -2, style: { left: '27%', top: '74.5%', width: '19.8%' } },
  { name: 'Maria Sacenas', image: '/about/team/maria.png', linkedinUrl: 'https://www.linkedin.com/in/msacenas/', rotation: 3, style: { left: '52%', top: '74.5%', width: '19.8%' } },
];

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
          <p className="section-subtitle">A snapshot of MGTE &apos;29 and the individuals that made this page possible!</p>
        </section>
        <span className="post-1a-final" />
        <section className="about-section">
          <p className="section-text"><strong>September 2024 marked the start of something new. </strong>The Management Engineering Class of 2029 walked onto campus with big dreams, complicated schedules, and one shared question floating through our minds:</p>
          <span className="whats-mgte" />
          <p className="section-text">
            Most of us tried to piece together an answer on the fly, something like &quot;Problem-solving... data... some stats... maybe software?&quot;
            Let&apos;s be real, we were winging it. But through the journey of late-night study sessions, co-op terms that pushed us outside our comfort zones,
            and classes that stretched our brains in every direction, we finally started to figure it out. Not just the textbook definition, but what it means to us.
          </p>
          <p className="section-text">
            We had chaotic study nights, group chats that saved our GPAs, and more than a few &quot;is this due tonight?!&quot; moments.
            Somewhere along the way, we began seeing the world differently, not as a collection of random problems,
            but as complex systems waiting to be understood, optimized, and redesigned.
          </p>
          <p className="section-text">
            So, who are we? We&apos;re thinkers, builders, spreadsheet wizards, and creative minds. We come from all kinds of backgrounds, with interests that span business,
            tech, design, data, and everything in between. But what connects us is our shared drive to make things better, smarter, faster, more sustainable, and more human.
          </p>
          <p className="section-text">
            We&apos;re building more than just skills. We&apos;re building friendships, memories, and the foundations of our futures, one project, one all-nighter,
            and one iced coffee at a time.
          </p>
          <p className="section-text">
            We&apos;re not just classmates. We&apos;re a community.<br />
            We&apos;re MGTE 2029, and we&apos;re just getting started.
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
            All of this came together thanks to a dedicated team of 12 individuals who worked tirelessly to bring
            this project to life, from brainstorming and design to data collection, development, and everything
            in between. This is more than just a website. It is our story and we are excited to share it with you!
          </p>
        </section>

        {/* Interactive Bulletin Board */}
        <div className="bulletin-board">
          <img src="/about/bg.png" alt="" className="bulletin-layer bulletin-bg" />
          <img src="/about/overlay.png" alt="" className="bulletin-layer bulletin-overlay" />
          {teamMembers.map((member, i) => (
            <TeamMember
              key={i}
              name={member.name}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              rotation={member.rotation}
              style={member.style}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link href="/class-awards" className="nav-btn nav-btn--yellow">
            &larr; Awards
          </Link>
        </div>

      </div>

    </ProfileLayout>
  );
}
