'use client';

import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import './demographics.scss';
import GenericChart from '../../components/charts/GenericChart';

export default function DemographicsPage() {
  return (
    <ProfileLayout>
      <div className="demographics-container">

        {/* Top banner */}
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <img src="/demographics/globe.png" alt="" className="title-decor decor-globe" />
          <img src="/demographics/Star 18.png" alt="" className="title-decor decor-star-18" />
          <img src="/demographics/Star 19.png" alt="" className="title-decor decor-star-19" />
          <img src="/demographics/Group 39928.png" alt="" className="title-decor decor-group" />
          <span className="bg-title" />
          <img src="/demographics/Star 8.png" alt="" className="title-decor decor-star-8" />
        </section>

        <section className="demographics-section">
          {/* Gender & Sexuality */}
          <h2 className="section-title">Gender & Sexuality</h2>
          <p className="section-subtitle">In MGTE 29, our class is filled with Women in STEM!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ top: '10%', right: '5%' }} />
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ top: '45%', left: '0%' }} />
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ bottom: '15%', right: '10%' }} />
              <GenericChart
                title="What Do You Identify As?"
                dataUrl="/data/gender.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ top: '15%', left: '3%' }} />
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ top: '20%', right: '3%' }} />
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ bottom: '20%', right: '15%' }} />
              <GenericChart
                title="What Is Your Sexuality?"
                dataUrl="/data/sexuality.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
          </div>

          {/* Ethnicity & Religion */}
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
                colors: ['#F4D03F'],
                hAxis: { title: '' },
                vAxis: { title: '' }
              }}
            />
            <GenericChart
              title="What Religion Do You Identify With?"
              dataUrl="/data/religion.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#F4D03F'],
                hAxis: { title: '' },
                vAxis: { title: '' }
              }}
            />
          </div>

          {/* Hometown & Birth Country */}
          <h2 className="section-title">Hometown & Birth Country</h2>
          <p className="section-subtitle">For everyone from Toronto &apos;barrens from the 6ix&apos;</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row single-chart">
            <GenericChart
              title="Where Is Your Birth Country?"
              dataUrl="/data/birth-country.csv"
              chartType="GeoChart"
              width="100%"
              height="400px"
              options={{
                colorAxis: { colors: ['#FCF3CF', '#F4D03F'] },
                backgroundColor: 'transparent',
                datalessRegionColor: '#f5f5f5',
                defaultColor: '#f5f5f5'
              }}
            />
          </div>
          <div className="hometown-section">
            <h3 className="chart-question">Where Is Your Hometown?</h3>
            <div className="word-cloud">
              <span className="city city-xl" style={{ position: 'absolute', top: '40%', left: '35%', transform: 'rotate(-5deg)' }}>Toronto</span>
              <span className="city city-lg" style={{ position: 'absolute', top: '20%', left: '55%', transform: 'rotate(3deg)' }}>Brampton</span>
              <span className="city city-md" style={{ position: 'absolute', top: '65%', left: '20%', transform: 'rotate(-2deg)' }}>Richmond Hill</span>
              <span className="city city-md" style={{ position: 'absolute', top: '15%', left: '15%', transform: 'rotate(5deg)' }}>Oakville</span>
              <span className="city city-md" style={{ position: 'absolute', top: '70%', left: '60%', transform: 'rotate(-4deg)' }}>Mississauga</span>
              <span className="city city-md" style={{ position: 'absolute', top: '30%', left: '75%', transform: 'rotate(2deg)' }}>Calgary</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '55%', left: '5%', transform: 'rotate(-3deg)' }}>Scarborough</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '10%', left: '40%', transform: 'rotate(4deg)' }}>Waterloo</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '80%', left: '45%', transform: 'rotate(-1deg)' }}>Markham</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '45%', left: '80%', transform: 'rotate(3deg)' }}>Milton</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '25%', left: '5%', transform: 'rotate(-5deg)' }}>Burlington</span>
              <span className="city city-sm" style={{ position: 'absolute', top: '60%', left: '85%', transform: 'rotate(2deg)' }}>Burnaby</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '5%', left: '70%', transform: 'rotate(-2deg)' }}>Ottawa</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '85%', left: '75%', transform: 'rotate(4deg)' }}>Hamilton</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '75%', left: '10%', transform: 'rotate(-4deg)' }}>Vaughan</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '35%', left: '10%', transform: 'rotate(1deg)' }}>Kitchener</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '50%', left: '65%', transform: 'rotate(-3deg)' }}>Windsor</span>
              <span className="city city-xs" style={{ position: 'absolute', top: '90%', left: '30%', transform: 'rotate(2deg)' }}>Barrie</span>
            </div>
          </div>

          {/* Languages & Birth Year */}
          <h2 className="section-title">Languages & Birth Years</h2>
          <p className="section-subtitle">Over 80% of MGTE can speak more than 1 language!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="How Many Languages Do You Speak?"
              dataUrl="/data/of-languages.csv"
              chartType="ColumnChart"
              options={{
                legend: { position: 'none' },
                colors: ['#F4D03F'],
                hAxis: { title: '' },
                vAxis: { title: '' }
              }}
            />
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ top: '10%', right: '10%' }} />
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ top: '45%', left: '5%' }} />
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ bottom: '12%', right: '3%' }} />
              <GenericChart
                title="When Were You Born?"
                dataUrl="/data/birth-year.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
          </div>

          {/* Our Families */}
          <h2 className="section-title">Our Families</h2>
          <p className="section-subtitle">The apple doesn&apos;t fall far from the tree for MGTE</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ top: '15%', left: '5%' }} />
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ top: '8%', right: '10%' }} />
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ bottom: '20%', right: '3%' }} />
              <GenericChart
                title="Do Your Parents Work in the STEM Fields?"
                dataUrl="/data/parents-in-stem.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ top: '5%', left: '10%' }} />
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ bottom: '18%', left: '3%' }} />
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ bottom: '25%', right: '8%' }} />
              <GenericChart
                title="How Many Siblings Do You Have?"
                dataUrl="/data/of-siblings.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
          </div>

          {/* Astrological Signs */}
          <h2 className="section-title">Astrological</h2>
          <p className="section-subtitle">To those who are Scorpios.. your parents got busy on Valentines Day!</p>
          <p className="respondent-count">54 respondents</p>
          <div className="zodiac-section">
            <div className="zodiac-header">
              <h3 className="chart-question">What Is Your Astrologic Sign?</h3>
              <p className="chart-respondents">number of respondents: 54</p>
            </div>
            <div className="zodiac-grid">
              {[
                { sign: 'aries', count: 3, alt: false, img: { w: '594.71%', h: '390.28%', left: '-42.86%', top: '-51.31%' } },
                { sign: 'taurus', count: 2, alt: true, img: { w: '709.05%', h: '390.28%', left: '-168.73%', top: '-50.69%' } },
                { sign: 'gemini', count: 5, alt: false, img: { w: '715.92%', h: '369.74%', left: '-273.25%', top: '-43.93%' } },
                { sign: 'cancer', count: 5, alt: true, img: { w: '607.57%', h: '369.74%', left: '-317.3%', top: '-42.57%' } },
                { sign: 'leo', count: 4, alt: false, img: { w: '802.86%', h: '373.69%', left: '-551.43%', top: '-53.21%' } },
                { sign: 'virgo', count: 3, alt: true, img: { w: '665.09%', h: '347.39%', left: '-538.46%', top: '-32.98%' } },
                { sign: 'libra', count: 4, alt: true, img: { w: '545.63%', h: '347.7%', left: '-31.71%', top: '-167.91%' } },
                { sign: 'scorpio', count: 11, alt: false, img: { w: '651.17%', h: '393.13%', left: '-156.07%', top: '-194.13%' } },
                { sign: 'sagittarius', count: 6, alt: true, img: { w: '713.97%', h: '369.74%', left: '-278.93%', top: '-189.14%' } },
                { sign: 'capricorn', count: 4, alt: false, img: { w: '666.14%', h: '303.76%', left: '-361.59%', top: '-136.36%' } },
                { sign: 'aquarius', count: 3, alt: true, img: { w: '688.03%', h: '531.3%', left: '-471.11%', top: '-286.58%' } },
                { sign: 'pisces', count: 4, alt: false, img: { w: '665.09%', h: '347.39%', left: '-552.07%', top: '-158.81%' } },
              ].map(({ sign, count, alt, img }) => (
                <div key={sign} className={`zodiac-card ${alt ? 'zodiac-card--alt' : ''}`}>
                  <div className="zodiac-icon">
                    <img
                      src="/demographics/zodiac-sprites.png"
                      alt={sign}
                      style={{
                        position: 'absolute',
                        width: img.w,
                        height: img.h,
                        left: img.left,
                        top: img.top,
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                  <span className="zodiac-label">{sign}: {count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Relationships */}
          <h2 className="section-title">Relationships</h2>
          <p className="section-subtitle">So someone is messy in MGTE...</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row relationship-row">
            <div className="hearts-container">
              <img src="/demographics/heart1.png" alt="" className="heart heart-1" />
              <img src="/demographics/heart2.png" alt="" className="heart heart-2" />
              <img src="/demographics/heart3.png" alt="" className="heart heart-3" />
            </div>
            <div className="pie-chart-wrapper">
              <img src="/demographics/Highlight 34.png" alt="" className="chart-highlight" style={{ top: '8%', left: '12%' }} />
              <img src="/demographics/Highlight 33.png" alt="" className="chart-highlight" style={{ top: '18%', right: '5%' }} />
              <img src="/demographics/Highlight 40.png" alt="" className="chart-highlight" style={{ bottom: '15%', left: '8%' }} />
              <GenericChart
                title="Are You In A Relationship?"
                dataUrl="/data/relationship-status.csv"
                chartType="PieChart"
                options={{
                  colors: ['#F4D03F', '#F7DC6F', '#F9E79F', '#FCF3CF'],
                  legend: { position: 'bottom' }
                }}
              />
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <Link href="/about" className="nav-btn nav-btn--purple">
              &larr; About
            </Link>
            <Link href="/academics" className="nav-btn nav-btn--blue">
              Academics &rarr;
            </Link>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
