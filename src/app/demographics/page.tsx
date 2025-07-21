'use client';

import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import './demographics.scss';
import GenericChart from '../../components/charts/GenericChart';

export default function DemographicsPage() {
  return (
    <ProfileLayout>
      <div className="demographics-container">

        {/* Gender & Sexuality */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Gender & Sexuality</h2>
          <p className="section-subtitle">In MGTE 29, our class is filled with Women in STEM!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="What Do You Identify As?"
              dataUrl="/data/gender.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
            <GenericChart
              title="What Is Your Sexuality?"
              dataUrl="/data/sexuality.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
        </section>

        {/* Ethnicity & Religion */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Ethnicity & Religion</h2>
          <p className="section-subtitle">Diversity all around in MGTE!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Which Ethnicities Do You Identify With?"
              dataUrl="/data/ethnicity.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F']
              }}
            />
            <GenericChart
              title="What Religion Do You Identify With?"
              dataUrl="/data/religion.csv"
              chartType="ColumnChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F']
              }}
            />
          </div>
        </section>

        {/* Hometown & Birth Country */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Hometown & Birth Country</h2>
          <p className="section-subtitle">For everyone from Toronto 'barrens from the 6ix'</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Where Is Your Birth Country?"
              dataUrl="/data/birth-country.csv"
              chartType="GeoChart"
              width="100%"
              height="400px"
            />
          </div>
          <div className="charts-row">
            <GenericChart
              title="Where Is Your Hometown?"
              dataUrl="/data/hometown.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F']
              }}
            />
          </div>
        </section>

        {/* Languages & Birth Year */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Languages & Birth Years</h2>
          <p className="section-subtitle">Over 80% of MGTE can speak more than 1 language!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="How Many Languages Do You Speak?"
              dataUrl="/data/of-languages.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
            <GenericChart
              title="When Were You Born?"
              dataUrl="/data/birth-year.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
        </section>

        {/* Our Families */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Our Families</h2>
          <p className="section-subtitle">The apple doesn't fall far from the tree for MGTE 🍎</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="Do Your Parents Work in the STEM Fields?"
              dataUrl="/data/parents-in-stem.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
            <GenericChart
              title="How Many Siblings Do You Have?"
              dataUrl="/data/of-siblings.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
        </section>

        {/* Astrological Signs */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Astrological Signs</h2>
          <p className="section-subtitle">To those who are Scorpios, your parents got busy on Valentines Day!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row astro-row">
            <GenericChart
              title="What Is Your Astrologic Sign?"
              dataUrl="/data/astrological-sign.csv"
              chartType="BarChart"
              options={{ 
                legend: { position: 'none' },
                colors: ['#F4D03F']
              }}
            />
          </div>
        </section>

        {/* Relationships */}
        <section className="demographics-chart-section">
          <h2 className="section-title">Relationships</h2>
          <p className="section-subtitle">So someone is messy in MGTE...</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row single-row">
            <GenericChart
              title="Are You In A Relationship?"
              dataUrl="/data/relationship-status.csv"
              chartType="PieChart"
              options={{ 
                pieHole: 0.3,
                colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF']
              }}
            />
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
