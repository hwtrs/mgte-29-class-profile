'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import './coop.scss';
import GenericChart from '../../components/charts/GenericChart';

export default function CoopPage() {
  const [awkwardMoments, setAwkwardMoments] = useState<string[]>([]);

  useEffect(() => {
    async function loadMoments() {
      try {
        const res = await fetch('/data/coop/awkward-moments.csv');
        if (!res.ok) throw new Error('Failed to load csv data');
        const text = await res.text();
        // Split by line, trim, filter out empty lines
        const moments = text
          .trim()
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);
        setAwkwardMoments(moments);
      } catch {
        setAwkwardMoments(['Error loading csv data']);
      }
    }
    loadMoments();
  }, []);
  
  return (
    <ProfileLayout>
      <div className="coop-container">
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        {/* How did you get your job? */}
        <section className="coop-chart-section">
          <h2 className="section-title">X Marks the Spot</h2>
          <p className="section-subtitle">Here&apos;s how people found their co-ops!</p>
          <p className="respondent-count">number of respondents: 38</p>
          <div className="charts-row">
            <GenericChart
              title="How did you get your job?"
              dataUrl="/data/coop/getting-it.csv"
              chartType="ColumnChart"
              xAxisLabel='Different Ways'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F'],
              }}
            />
          </div>
        </section>

        {/* Application Count */}
        <section className="coop-chart-section">
          <h2 className="section-title">Application Count</h2>
          <p className="section-subtitle">Just apply, apply, APPLY!!!</p>
          <p className="respondent-count">number of respondents: 39</p>
          <div className="charts-row">
            <GenericChart
              title="WaterlooWorks"
              dataUrl="/data/coop/ww-apps.csv"
              chartType="ColumnChart"
              xAxisLabel='Number of Applications'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F'],
              }}
            />
            <GenericChart
              title="External"
              dataUrl="/data/coop/external-apps.csv"
              chartType="ColumnChart"
              xAxisLabel='Number of Applications'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F9E79F'],
              }}
            />
          </div>
        </section>

        {/* Interviews */}
        <section className="coop-chart-section">
          <h2 className="section-title">Let&apos;s Talk Interviews!</h2>
          <p className="section-subtitle">Excuse me, who is skipping their interviews??? 🧐</p>
          <p className="respondent-count">number of respondents: 39 / 38</p>
          <div className="charts-row">
            <GenericChart
              title="How many interviews did you get?"
              dataUrl="/data/coop/interview-count.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
            <GenericChart
              title="Did you ever miss an interview?"
              dataUrl="/data/coop/missed-an-interview.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
        </section>

        {/* Awkward Interview Moments */}
        <section className="coop-chart-section">
          <h2 className="section-title">Awkward Interview Moments</h2>
          <p className="section-subtitle">Oh come on... it can’t be that bad... 😬</p>
          <p className="respondent-count">number of respondents: 20</p>
          <div className="awkward-grid">
            {awkwardMoments.map((moment, idx) => (
              <div className="awkward-card" key={idx}>
                {moment}
              </div>
            ))}
          </div>
        </section>

        {/* Co-op Acquired */}
        <section className="coop-chart-section">
          <h2 className="section-title">Co-op Acquired ✅</h2>
          <p className="section-subtitle">So, when did you lock it in?</p>
          <p className="respondent-count">number of respondents: 39 / 37</p>
          <div className="charts-row">
            <GenericChart
              title="When did you get your co-op?"
              dataUrl="/data/coop/when-did-you-get-it.csv"
              chartType="LineChart"
              xAxisLabel='Time'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F'],
              }}
            />
          </div>
          <div className="charts-row">
            <GenericChart
              title="When did you spill the news?"
              dataUrl="/data/coop/when-did-you-tell.csv"
              chartType="ColumnChart"
              xAxisLabel='Time'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F9E79F'],
              }}
            />
          </div>
        </section>

        {/* How did you get your job? */}
        <section className="coop-chart-section">
          <h2 className="section-title">MGTE Big Dreams</h2>
          <p className="section-subtitle">IT&apos;S ABOUT DRIVE, IT&apos;S ABOUT POWER...</p>
          <p className="respondent-count">number of respondents: 25</p>
          <div className="charts-row">
            <GenericChart
              title="What is your dream company?"
              dataUrl="/data/coop/dream-company.csv"
              chartType="ColumnChart"
              xAxisLabel='Company'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#FCF3CF'],
              }}
            />
          </div>
        </section>

        {/* Our First Co-ops */}
        <section className="coop-chart-section">
          <h2 className="section-title">Our First Co-ops</h2>
          <p className="section-subtitle">We all start somewhere!</p>
          <p className="respondent-count">number of respondents: 38 / 38 / 30</p>
          <div className="charts-row">
            <GenericChart
              title="Where were you located?"
              dataUrl="/data/coop/job-location.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
            <GenericChart
              title="Where did you work from?"
              dataUrl="/data/coop/job-type.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
          <div className="charts-row">
            <GenericChart
              title="What was your job title?"
              dataUrl="/data/coop/job-role.csv"
              chartType="BarChart"
              xAxisLabel='Position'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F9E79F'],
              }}
            />
          </div>
        </section>

        {/* Honest Reviews */}
        <section className="coop-chart-section">
          <h2 className="section-title">Honest Reviews</h2>
          <p className="section-subtitle">Love it or hate it?</p>
          <p className="respondent-count">number of respondents: 37</p>
          <div className="charts-row">
            <GenericChart
              title="How much did you enjoy your co-op"
              dataUrl="/data/coop/enjoyment.csv"
              chartType="BarChart"
              xAxisLabel='Rating (out of 5)'
              yAxisLabel='Number of People'
              options={{ 
                legend: { position: 'none' },
                colors: ['#F9E79F'],
              }}
            />
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <Link href="/lifestyle" className="nav-btn nav-btn--purple">
            &larr; Lifestyle
          </Link>
          <Link href="/pre-mgte" className="nav-btn nav-btn--green">
            Pre-MGTE &rarr;
          </Link>
        </div>
      </div>
    </ProfileLayout>
  );
}
