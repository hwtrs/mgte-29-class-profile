'use client';

import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import GenericChart from '../../components/charts/GenericChart';
import './premgte.scss';

export default function PreMgtePage() {
  return (
    <ProfileLayout>
      <div className="premgte-container">

        {/* Admission Average Reveal */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Admission Average Reveal</h2>
          <p className="section-subtitle">Our students consistently excel academically!</p>
          <p className="respondent-count">54 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="What was your high school admission average?"
              dataUrl="/data/hs-average.csv"
              chartType="ColumnChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                vAxis: { title: 'Number of Students' },
                hAxis: { title: 'Average Range (%)' }
              }}
            />
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Extracurriculars</h2>
          <p className="section-subtitle">Where MGTE learned about teamwork and leadership!</p>
          <p className="respondent-count">53 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="What were your favorite extracurriculars?"
              dataUrl="/data/extracurriculars.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>
        </section>

        {/* Coding Experience */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Coding Experience</h2>
          <p className="section-subtitle">On a scale of 1-10, how well did you know how to code before university?</p>
          <p className="respondent-count">57 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Before University Coding Knowledge"
              dataUrl="/data/coding-level.csv"
              chartType="ColumnChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                vAxis: { title: 'Number of Students' },
                hAxis: { title: 'Coding Level (1-10)' }
              }}
            />
          </div>
        </section>

        {/* Our Transition to University */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Our Transition to University</h2>
          <p className="section-subtitle">What did you do before entering MGTE at UofT?</p>
          <p className="respondent-count">57 respondents for transition question, 54 respondents for preparation rating</p>
          <div className="charts-row">
            <GenericChart
              title="What did you do before entering MGTE at UofT?"
              dataUrl="/data/hs-vs-uni.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#4CAF50', '#81C784', '#A5D6A7']
              }}
            />
            <GenericChart
              title="From a scale of 1-10, how well did your high school prepare you for this university program?"
              dataUrl="/data/hs-preparation.csv"
              chartType="ColumnChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                vAxis: { title: 'Number of Students' },
                hAxis: { title: 'Preparation Rating (1-10)' }
              }}
            />
          </div>
        </section>

        {/* Jobs and Internships */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Jobs and Internships</h2>
          <p className="section-subtitle">Most of us were pretty busy during high school, working along with their academic responsibilities!</p>
          <p className="respondent-count">55 respondents for part-time jobs, 56 respondents for internship experience</p>
          <div className="charts-row">
            <GenericChart
              title="Did you have a part-time job?"
              dataUrl="/data/part-time-job.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#4CAF50', '#81C784', '#A5D6A7']
              }}
            />
            <GenericChart
              title="Did you come to university with previous internship experience?"
              dataUrl="/data/internship-experience.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#4CAF50', '#81C784', '#A5D6A7']
              }}
            />
          </div>
        </section>

        {/* High School Passions */}
        <section className="premgte-chart-section">
          <h2 className="section-title">High School Passions</h2>
          <p className="section-subtitle">What subjects got our hearts racing and minds working the most in high school and why it&apos;s important as it lay the foundations for our University studies!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="What was your favorite subject?"
              dataUrl="/data/favorite-subject.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>
        </section>

        {/* Notable Awards & Programs */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Notable Awards & Programs</h2>
          <p className="section-subtitle">What sets us apart from the rest</p>
          <p className="respondent-count">51 respondents for academic programs, 38 respondents for graduation awards</p>
          <div className="charts-row">
            <GenericChart
              title="What were your notable academic programs?"
              dataUrl="/data/academic-programs.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                hAxis: { title: 'Number of People' }
              }}
            />
            <GenericChart
              title="Did you win any academic programs?"
              dataUrl="/data/grad-awards.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#4CAF50'],
                hAxis: { title: 'Number of People' }
              }}
            />
          </div>
        </section>

        {/* Childhood Dream Jobs */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Childhood Dream Jobs</h2>
          <p className="section-subtitle">What are we a kid when the your dream job?</p>
          <p className="respondent-count">36 respondents</p>
          <div className="charts-row single-row">
            <div className="dream-jobs-wordcloud">
              <div className="wordcloud-container">
                <span className="word-large">Doctor</span>
                <span className="word-medium">Engineer</span>
                <span className="word-medium">Teacher</span>
                <span className="word-small">Astronaut</span>
                <span className="word-small">Artist</span>
                <span className="word-medium">Pilot</span>
                <span className="word-small">Chef</span>
                <span className="word-small">Scientist</span>
                <span className="word-medium">Architect</span>
                <span className="word-small">Lawyer</span>
                <span className="word-small">Veterinarian</span>
                <span className="word-small">Firefighter</span>
                <span className="word-small">Police</span>
                <span className="word-small">Musician</span>
                <span className="word-small">Writer</span>
                <span className="word-small">Athlete</span>
                <span className="word-small">Actor</span>
                <span className="word-small">Dancer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Advice to Our Younger Selves */}
        <section className="premgte-chart-section">
          <h2 className="section-title">Advice to Our Younger Selves</h2>
          <p className="section-subtitle">Words of wisdom from MGTE students</p>
          <div className="advice-grid">
            <div className="advice-card">
              <p>&quot;Don&apos;t be afraid to take risks and try new things&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Focus on learning, not just grades&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Build meaningful relationships with your peers&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Don&apos;t compare yourself to others&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Ask for help when you need it&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Enjoy the journey, not just the destination&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Stay curious and keep asking questions&quot;</p>
            </div>
            <div className="advice-card">
              <p>&quot;Time management is everything&quot;</p>
            </div>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
