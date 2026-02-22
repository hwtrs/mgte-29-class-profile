'use client';

import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import GenericChart from '../../components/charts/GenericChart';
import './mgte.scss';

export default function MgtePage() {
  return (
    <ProfileLayout>
      <div className="mgte-container">

        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        <section className="mgte-section">
          {/* Where It Began */}
          <h2 className="section-title">Where It Began...</h2>
          <p className="section-subtitle">None of us really knew what we signed up for, but now we wouldn&apos;t trade it for anything!</p>
          <div className="charts-row">
            <GenericChart
              title="Why did you choose MGTE?"
              showRespondents
              dataUrl="/data/mgte/why-mgte.csv"
              chartType="PieChart"
              options={{
                colors: ['#6247AA', '#8B7BB8', '#C7B6E5', '#DED4F0', '#A78BCA', '#9370B8', '#B49ED6'],
                legend: { position: 'bottom' },
              }}
            />
            <GenericChart
              title="How did you find out about MGTE?"
              showRespondents
              dataUrl="/data/mgte/finding-out.csv"
              chartType="PieChart"
              options={{
                colors: ['#6247AA', '#8B7BB8', '#C7B6E5', '#DED4F0', '#A78BCA', '#9370B8', '#B49ED6'],
                legend: { position: 'bottom' },
              }}
            />
          </div>

          {/* First Program Choice */}
          <h2 className="section-title">First Program Choice</h2>
          <p className="section-subtitle">For most of us, MGTE was our top choice, not just a back-up plan.</p>
          <p className="respondent-count">40 respondents</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="Was MGTE your first program choice?"
              showRespondents
              dataUrl="/data/mgte/1st-program-choice.csv"
              chartType="PieChart"
              options={{
                colors: ['#6247AA', '#8B7BB8', '#C7B6E5', '#DED4F0', '#A78BCA', '#9370B8'],
                legend: { position: 'bottom' },
              }}
            />
          </div>

          {/* What Even is MGTE? */}
          <h2 className="section-title">What Even is MGTE?</h2>
          <p className="section-subtitle">Management answers the dreaded question... what is management?</p>
          <div className="section-img-wrapper">
            <h3 className="img-subtitle">Describe MGTE in 3 words ONLY!</h3>
            <img
              src="/mgte/describe.png"
              alt="How MGTE students describe their program"
              className="section-img"
            />
          </div>

          {/* Second Thoughts */}
          <h2 className="section-title">Second Thoughts...</h2>
          <p className="section-subtitle">Almost half the class has gone through an identity crisis.</p>
          <p className="respondent-count">43 respondents</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="Have you ever considered dropping or switching out of MGTE?"
              showRespondents
              dataUrl="/data/mgte/dropping-switching.csv"
              chartType="PieChart"
              options={{
                colors: ['#6247AA', '#C7B6E5'],
                legend: { position: 'bottom' },
              }}
            />
          </div>

          {/* The Future Management Engineers */}
          <h2 className="section-title">The Future Management Engineers</h2>
          <p className="section-subtitle">Manage time, Manage grades, Management engineering.</p>
          <p className="respondent-count">43 respondents</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="What industry / career path are you most interested in?"
              showRespondents
              dataUrl="/data/mgte/industry-career.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: '' },
              }}
            />
          </div>

          {/* The Management Experience */}
          <h2 className="section-title">The Management Experience</h2>
          <p className="section-subtitle">#MANAGEMENT2LEGIT</p>
          <div className="section-img-wrapper">
            <h3 className="img-subtitle">ONE PHRASE to describe YOUR MGTE experience thus far!</h3>
            <img
              src="/mgte/phrase.png"
              alt="The Management Experience"
              className="section-img"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <Link href="/pre-mgte" className="nav-btn nav-btn--purple">
              &larr; Pre-MGTE
            </Link>
            <Link href="/gallery" className="nav-btn nav-btn--green">
              Gallery &rarr;
            </Link>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
