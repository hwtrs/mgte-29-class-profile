'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProfileLayout from '../../layouts/ProfileLayout';
import './demographics.scss';
import GenericChart from '../../components/charts/GenericChart';

const ZODIAC_SPRITES: Record<string, { alt: boolean; img: { w: string; h: string; left: string; top: string } }> = {
  aries:       { alt: false, img: { w: '594.71%', h: '390.28%', left: '-42.86%', top: '-51.31%' } },
  taurus:      { alt: true,  img: { w: '709.05%', h: '390.28%', left: '-168.73%', top: '-50.69%' } },
  gemini:      { alt: false, img: { w: '715.92%', h: '369.74%', left: '-273.25%', top: '-43.93%' } },
  cancer:      { alt: true,  img: { w: '607.57%', h: '369.74%', left: '-317.3%', top: '-42.57%' } },
  leo:         { alt: false, img: { w: '802.86%', h: '373.69%', left: '-551.43%', top: '-53.21%' } },
  virgo:       { alt: true,  img: { w: '665.09%', h: '347.39%', left: '-538.46%', top: '-32.98%' } },
  libra:       { alt: true,  img: { w: '545.63%', h: '347.7%', left: '-31.71%', top: '-167.91%' } },
  scorpio:     { alt: false, img: { w: '651.17%', h: '393.13%', left: '-156.07%', top: '-194.13%' } },
  sagittarius: { alt: true,  img: { w: '713.97%', h: '369.74%', left: '-278.93%', top: '-189.14%' } },
  capricorn:   { alt: false, img: { w: '666.14%', h: '303.76%', left: '-361.59%', top: '-136.36%' } },
  aquarius:    { alt: true,  img: { w: '688.03%', h: '531.3%', left: '-471.11%', top: '-286.58%' } },
  pisces:      { alt: false, img: { w: '665.09%', h: '347.39%', left: '-552.07%', top: '-158.81%' } },
};

const ZODIAC_ORDER = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

export default function DemographicsPage() {
  const [zodiacData, setZodiacData] = useState<{ sign: string; count: number }[]>([]);

  useEffect(() => {
    fetch('/data/demographics/astrological-sign.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split('\n').slice(1);
        const counts: Record<string, number> = {};
        lines.forEach(line => {
          const [label, countStr] = line.split(',');
          counts[label.trim().toLowerCase()] = Number(countStr.trim());
        });
        setZodiacData(ZODIAC_ORDER.map(sign => ({ sign, count: counts[sign] || 0 })));
      });
  }, []);

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
                dataUrl="/data/demographics/gender.csv"
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
                dataUrl="/data/demographics/sexuality.csv"
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
              dataUrl="/data/demographics/ethnicity.csv"
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
              dataUrl="/data/demographics/religion.csv"
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
              dataUrl="/data/demographics/birth-country.csv"
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
            <div className="word-cloud" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', padding: '0' }}>
              <img
                src="/demographics/Group 40130.png"
                alt="Hometown Word Cloud"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>
          </div>

          {/* Languages & Birth Year */}
          <h2 className="section-title">Languages & Birth Years</h2>
          <p className="section-subtitle">Over 80% of MGTE can speak more than 1 language!</p>
          <p className="respondent-count">55 respondents</p>
          <div className="charts-row">
            <GenericChart
              title="How Many Languages Do You Speak?"
              dataUrl="/data/demographics/of-languages.csv"
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
                dataUrl="/data/demographics/birth-year.csv"
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
                dataUrl="/data/demographics/parents-in-stem.csv"
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
                dataUrl="/data/demographics/of-siblings.csv"
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
              {zodiacData.map(({ sign, count }) => {
                const sprite = ZODIAC_SPRITES[sign];
                return (
                  <div key={sign} className={`zodiac-card ${sprite.alt ? 'zodiac-card--alt' : ''}`}>
                    <div className="zodiac-icon">
                      <img
                        src="/demographics/zodiac-sprites.png"
                        alt={sign}
                        style={{
                          position: 'absolute',
                          width: sprite.img.w,
                          height: sprite.img.h,
                          left: sprite.img.left,
                          top: sprite.img.top,
                          maxWidth: 'none',
                        }}
                      />
                    </div>
                    <span className="zodiac-label">{sign}: {count}</span>
                  </div>
                );
              })}
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
                dataUrl="/data/demographics/relationship-status.csv"
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
