'use client';

import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import GenericChart from '../../components/charts/GenericChart';
import './premgte.scss';

export default function PreMgtePage() {
  return (
    <ProfileLayout>
      <div className="premgte-container">

        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        <section className="premgte-section">
          {/* Admission Average Reveal */}
          <h2 className="section-title">Admission Average Reveal</h2>
          <p className="section-subtitle">Good grades help, but passion and persistence matter even more.</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="What was your high school admission average?"
              showRespondents
              dataUrl="/data/pre-mgte/hs-average.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                vAxis: { title: 'Number of Students' },
                hAxis: {
                  title: 'Admission Average (%)',
                }
              }}
            />
          </div>

          {/* Extracurriculars */}
          <h2 className="section-title">Extracurriculars</h2>
          <p className="section-subtitle">Where MGTE learned about teamwork, leadership, and skills textbooks couldn&apos;t teach us.</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="What were your notable extracurriculars?"
              subtitle="number of respondents: 52"
              dataUrl="/data/pre-mgte/extracurriculars.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>

          {/* Coding Experience */}
          <h2 className="section-title">Coding Experience</h2>
          <p className="section-subtitle">Majority of us barely touched the terminal, and that&apos;s okay!</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="On a scale of 1-10, how well did you know how to code before university?"
              showRespondents
              dataUrl="/data/pre-mgte/coding-level.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                vAxis: { title: 'Number of Students' },
                hAxis: { title: 'Coding Level (1-10)' }
              }}
            />
          </div>

          {/* Our Transition to University */}
          <h2 className="section-title">Our Transition to University</h2>
          <p className="section-subtitle">No matter where we started, we all made it (mostly) through the madness of first year.</p>
          <div className="charts-row">
            <GenericChart
              title="What did you do before starting MGTE in 2024?"
              showRespondents
              dataUrl="/data/pre-mgte/hs-vs-uni.csv"
              chartType="PieChart"
              options={{

                colors: ['#66BB6A', '#A5D6A7', '#81C784']
              }}
            />
            <GenericChart
              title="From a scale of 1-10, how well did your high school prepare you for this program?"
              showRespondents
              dataUrl="/data/pre-mgte/hs-preparation.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                vAxis: { title: 'Number of Students' },
                hAxis: { title: 'Preparation Rating (1-10)' }
              }}
            />
          </div>

          {/* Jobs and Internships */}
          <h2 className="section-title">Jobs and Internships</h2>
          <p className="section-subtitle">Most of us came with no internships on our resume, and we&apos;re doing just fine!</p>
          <div className="charts-row">
            <GenericChart
              title="Did you have a part-time job?"
              showRespondents
              dataUrl="/data/pre-mgte/part-time-job.csv"
              chartType="PieChart"
              options={{

                colors: ['#A5D6A7', '#66BB6A', '#81C784']
              }}
            />
            <GenericChart
              title="Did you come in with previous internship experience?"
              showRespondents
              dataUrl="/data/pre-mgte/internship-experience.csv"
              chartType="PieChart"
              options={{

                colors: ['#66BB6A', '#A5D6A7', '#81C784']
              }}
            />
          </div>

          {/* High School Passions */}
          <h2 className="section-title">High School Passions</h2>
          <p className="section-subtitle">The subjects that sparked something in us... or at least made the school day fly by.</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="What was your favorite subject?"
              showRespondents
              dataUrl="/data/pre-mgte/favorite-subject.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>

          {/* Notable Awards & Programs */}
          <h2 className="section-title">Notable Awards &amp; Programs</h2>
          <p className="section-subtitle">What can we say? We like to aim high.</p>
          <div className="charts-row">
            <GenericChart
              title="What were your notable graduation awards?"
              showRespondents
              dataUrl="/data/pre-mgte/grad-awards.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                hAxis: { title: 'Number of People' }
              }}
            />
            <GenericChart
              title="Did you do any academic programs?"
              showRespondents
              dataUrl="/data/pre-mgte/academic-programs.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#A5D6A7'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>

          {/* Childhood Dream Jobs */}
          <h2 className="section-title">Childhood Dream Jobs</h2>
          <p className="section-subtitle">MGTE &apos;29 stays dreaming big!</p>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '1.25rem', color: '#000', marginBottom: '0.2rem' }}>When you were a kid, what was your dream job?</h3>
            <p style={{ fontFamily: 'Nunito', fontStyle: 'italic', color: '#535047', fontSize: '14px', margin: 0 }}>number of respondents: 54</p>
          </div>

          <div className="charts-row single-chart">
            <img
              src="/pre-mgte/cloud.png"
              alt="Childhood Dream Jobs Word Cloud"
              className="word-cloud-img"
            />
          </div>

          {/* Advice to Our Younger Selves */}
          <h2 className="section-title">Advice to Our Younger Selves</h2>
          <p className="section-subtitle">The best advice to our high school-aged selves!</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <img
              src="/pre-mgte/advice.png"
              alt="Advice to Our Younger Selves"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <Link href="/co-op" className="nav-btn nav-btn--yellow">
              &larr; Co-op
            </Link>
            <Link href="/mgte" className="nav-btn nav-btn--purple">
              MGTE &rarr;
            </Link>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
