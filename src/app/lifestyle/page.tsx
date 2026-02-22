'use client';

import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import GenericChart from '../../components/charts/GenericChart';
import MultiSeriesChart from '../../components/charts/MultiSeriesChart';
import SongCard from '../../components/cards/SongCard';
import './lifestyle.scss';

export default function LifestylePage() {
  return (
    <ProfileLayout>
      <div className="lifestyle-container">

        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

        <section className="lifestyle-section">
          {/* Stress Levels */}
          <h2 className="section-title">Stress Levels</h2>
          <p className="section-subtitle">This year took a toll on our stress... hopefully 2A will be better!</p>
          <p className="respondent-count">38 respondents</p>
          <div className="charts-row single-chart">
            <MultiSeriesChart
              title="What were your stress levels in 1A vs. 1B?"
              subtitle="number of respondents: 38"
              dataUrl="/data/lifestyle/stress-combined.csv"
              chartType="ColumnChart"
              multiSeries
              xAxisLabel="Stress Level"
              yAxisLabel="Number of People"
              options={{
                colors: ['#6247AA', '#C7B6E5'],
                legend: { position: 'top' },
              }}
            />
          </div>

          {/* Home Away from Home */}
          <h2 className="section-title">Home Away from Home</h2>
          <p className="section-subtitle">Where we lived and how many people went home every week says a lot.</p>
          <p className="respondent-count">38 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Where did you live in first year?"
              showRespondents
              dataUrl="/data/lifestyle/housing.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: 'Residence' },
              }}
            />
            <GenericChart
              title="How often did you go home?"
              showRespondents
              dataUrl="/data/lifestyle/going-home.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: 'Residence' },
              }}
            />
          </div>

          {/* Brainrotted MGTE Kids */}
          <h2 className="section-title">Brainrotted MGTE Kids</h2>
          <p className="section-subtitle">OIIA OIIA!</p>
          <p className="respondent-count">39 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="What was your daily hour screen time?"
              showRespondents
              dataUrl="/data/lifestyle/daily-screen-hours.csv"
              chartType="PieChart"
              options={{

                colors: ['#6247AA', '#8B7BB8', '#C7B6E5', '#DED4F0'],
                legend: { position: 'bottom' },
              }}
            />
            <GenericChart
              title="How many hours of sleep do you get daily?"
              showRespondents
              dataUrl="/data/lifestyle/daily-sleep.csv"
              chartType="PieChart"
              options={{

                colors: ['#6247AA', '#8B7BB8', '#C7B6E5', '#DED4F0'],
                legend: { position: 'bottom' },
              }}
            />
          </div>

          {/* Weekly MGTE Schedule */}
          <h2 className="section-title">Weekly MGTE Schedule</h2>
          <p className="section-subtitle">Some of us locked in at the gym, others locked in the basement of DC Library for hours.</p>
          <p className="respondent-count">38 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="How many hours a week did you exercise?"
              showRespondents
              dataUrl="/data/lifestyle/exercise-per-week.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: 'Hours' },
              }}
            />
            <GenericChart
              title="How many hours did you study a week?"
              showRespondents
              dataUrl="/data/lifestyle/studying-per-week.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: 'Hours' },
              }}
            />
          </div>

          {/* The MGTE Class Dynamics */}
          <h2 className="section-title">The MGTE Class Dynamics</h2>
          <p className="section-subtitle">Management Bonfire Party every year?</p>
          <p className="respondent-count">36 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Is your best friend in our class?"
              showRespondents
              dataUrl="/data/lifestyle/best-friend.csv"
              chartType="PieChart"
              options={{

                colors: ['#6247AA', '#C7B6E5'],
                legend: { position: 'bottom' },
              }}
            />
            <GenericChart
              title="How many people in MGTE invited to your birthday party?"
              showRespondents
              dataUrl="/data/lifestyle/classmates-at-bday.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#8B7BB8'],
                hAxis: { title: 'Number of People' },
                vAxis: { title: 'People Invited' },
              }}
            />
          </div>

          {/* Bigback MGTE */}
          <h2 className="section-title">Bigback MGTE</h2>
          <p className="section-subtitle">I know we are all going to miss DC Bites every second, minute, hour, day, week, month, year.</p>
          <div className="charts-row">
            <GenericChart
              title="What is your favourite place in the PLAZA?"
              showRespondents
              dataUrl="/data/lifestyle/fav-plaza.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                vAxis: { title: 'Number of People' },
                hAxis: { title: 'Plaza Food' },
              }}
            />
            <GenericChart
              title="What is your favourite place ONCAMPUS?"
              showRespondents
              dataUrl="/data/lifestyle/fav-on-campus.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#6247AA'],
                vAxis: { title: 'Number of People' },
                hAxis: { title: 'On Campus Food' },
              }}
            />
          </div>

          {/* MGTE Recommends */}
          <h2 className="section-title">MGTE Recommends</h2>
          <p className="section-subtitle">We don&apos;t gatekeep around here!</p>
          <div className="charts-row">
            <GenericChart
              title="What's your favourite nap spot?"
              showRespondents
              dataUrl="/data/lifestyle/fav-nap-place.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#8B7BB8'],
                hAxis: { title: 'Number of People' },
              }}
            />
            <GenericChart
              title="What's your favourite study spot?"
              showRespondents
              dataUrl="/data/lifestyle/fav-study-place.csv"
              chartType="BarChart"
              options={{
                legend: { position: 'none' },
                colors: ['#C7B6E5'],
                hAxis: { title: 'Number of People' },
              }}
            />
          </div>

          {/* MGTE's Class Secrets */}
          <h2 className="section-title">MGTE&apos;s Class Secrets</h2>
          <p className="section-subtitle">Anyone here doing enemies to lovers?</p>
          <div className="charts-row">
            <GenericChart
              title="Was there anyone you disliked in MGTE?"
              showRespondents
              dataUrl="/data/lifestyle/hated-on.csv"
              chartType="PieChart"
              options={{

                colors: ['#6247AA', '#C7B6E5'],
                legend: { position: 'bottom' },
              }}
            />
            <GenericChart
              title="Was there anyone you had a crush on?"
              showRespondents
              dataUrl="/data/lifestyle/crush.csv"
              chartType="PieChart"
              options={{

                colors: ['#6247AA', '#8B7BB8', '#C7B6E5'],
                legend: { position: 'bottom' },
              }}
            />
          </div>

          {/* Management's Favs */}
          <h2 className="section-title">Management&apos;s Favs</h2>
          <p className="section-subtitle">Triple M: Music. Media. Management.</p>
          <div className="section-img-wrapper">
            <h3 className="img-subtitle">What song did you have on repeat?</h3>
            <div className="song-cards-grid">
              <SongCard title="So Good" artist="Weston Estate" image="/lifestyle/song-so-good.png" spotifyTrackId="0ZpHuEhi1CvOJgrqOSy8mv" rotation={3} />
              <SongCard title="Nokia" artist="Drake" image="/lifestyle/song-nokia.png" spotifyTrackId="2u9S9JJ6hTZS3Vf22HOZKg" rotation={-2} />
              <SongCard title="ETA" artist="NewJeans" image="/lifestyle/song-eta.png" spotifyTrackId="56v8WEnGzLByGsDAXDiv4d" rotation={4} />
              <SongCard title="Pink Matter" artist="Frank Ocean" image="/lifestyle/song-pink-matter.png" spotifyTrackId="1fOkmYW3ZFkkjIdOZSf596" rotation={-3} />
              <SongCard title="Free Now" artist="Gracie Abrams" image="/lifestyle/song-free-now.png" spotifyTrackId="1aThn8Pk8zRzGGPClZe9Oq" rotation={2} />
              <SongCard title="Pray for Me" artist="Kendrick Lamar & The Weeknd" image="/lifestyle/song-pray-for-me.png" spotifyTrackId="77UjLW8j5UAGAGVGhR5oUK" rotation={-4} />
            </div>
          </div>
          <div className="section-img-wrapper">
            <h3 className="img-subtitle">What show were you binging while studying (or not)?</h3>
            <img
              src="/lifestyle/shows.png"
              alt="Shows we were binging"
              className="section-img"
            />
          </div>

          {/* Rice Purity Levels */}
          <h2 className="section-title">Rice Purity Levels</h2>
          <p className="section-subtitle">Destroying those engineering stereotypes one score at a time!</p>
          <p className="respondent-count">27 respondents</p>
          <div className="charts-row single-chart">
            <MultiSeriesChart
              title="What were your Rice Purity Score 1A vs. 1B"
              subtitle="number of respondents: 27"
              dataUrl="/data/lifestyle/rice-purity-combined.csv"
              chartType="LineChart"
              multiSeries
              xAxisLabel="Rice Purity Score"
              yAxisLabel="Number of People"
              options={{
                colors: ['#6247AA', '#C7B6E5'],
                legend: { position: 'top' },
                curveType: 'function',
                pointSize: 6,
                vAxis: { format: '0' },
              }}
            />
          </div>

          {/* Craziest Experience in MGTE */}
          <h2 className="section-title">Craziest Experience in MGTE</h2>
          <p className="section-subtitle">Guys what happened during St. Patricks...</p>
          <div className="section-img-wrapper">
            <img
              src="/lifestyle/experiences.png"
              alt="Craziest experiences in MGTE"
              className="section-img"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <Link href="/academics" className="nav-btn nav-btn--blue">
              &larr; Academics
            </Link>
            <Link href="/co-op" className="nav-btn nav-btn--green">
              Co-op &rarr;
            </Link>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
